import { useEffect, useState } from "react";

const SECTION_GLOWS = {
  home: "rgba(192,132,252,0.25)",      // purple
  projects: "rgba(147,197,253,0.22)",  // blue
  skills: "rgba(167,139,250,0.22)",    // violet
  about: "rgba(196,181,253,0.20)",     // soft lavender
  contacts: "rgba(129,140,248,0.20)",  // indigo
};

function SectionAwareGlow() {
  const [color, setColor] = useState(SECTION_GLOWS.home);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (SECTION_GLOWS[id]) {
              setColor(SECTION_GLOWS[id]);
            }
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2
                   w-[750px] h-[750px]
                   blur-[140px]
                   transition-all duration-700 ease-out"
        style={{
          top: `${-200 + offset}px`,
          background: `radial-gradient(circle, ${color}, transparent 65%)`,
        }}
      />
    </div>
  );
}

export default SectionAwareGlow;
