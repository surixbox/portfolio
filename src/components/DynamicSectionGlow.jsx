import { useEffect, useRef, useState } from "react";

const GLOW_CONFIG = {
  home: {
    color: "rgba(192,132,252,0.28)",
    size: 750,
    shape: "circle",
  },
  projects: {
    color: "rgba(147,197,253,0.25)",
    size: 900,
    shape: "ellipse",
  },
  skills: {
    color: "rgba(167,139,250,0.25)",
    size: 700,
    shape: "tilted",
  },
  about: {
    color: "rgba(196,181,253,0.22)",
    size: 550,
    shape: "small",
  },
  contacts: {
    color: "rgba(129,140,248,0.22)",
    size: 500,
    shape: "focused",
  },
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function DynamicSectionGlow() {
  const [active, setActive] = useState("home");
  const [pos, setPos] = useState({ x: 50, y: -200 });
  const ref = useRef(null);

  /* 🔹 Detect active section */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* 🔹 Random slow drift */
  useEffect(() => {
    const interval = setInterval(() => {
      setPos({
        x: random(35, 65),
        y: random(-250, 350),
      });
    }, 6000); // slow movement

    return () => clearInterval(interval);
  }, []);

  const glow = GLOW_CONFIG[active] || GLOW_CONFIG.home;

  /* 🔹 Shape styles */
  const shapeStyle = {
    circle: {
      borderRadius: "50%",
    },
    ellipse: {
      borderRadius: "50% / 35%",
    },
    tilted: {
      borderRadius: "40%",
      transform: "rotate(15deg)",
    },
    small: {
      borderRadius: "50%",
      filter: "blur(140px)",
    },
    focused: {
      borderRadius: "45%",
      filter: "blur(120px)",
    },
  };

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute transition-all duration-[1800ms] ease-out"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}px`,
          width: `${glow.size}px`,
          height: `${glow.size}px`,
          background: `radial-gradient(circle, ${glow.color}, transparent 65%)`,
          filter: "blur(160px)",
          transform: `translateX(-50%)`,
          ...shapeStyle[glow.shape],
        }}
      />
    </div>
  );
}

export default DynamicSectionGlow;
