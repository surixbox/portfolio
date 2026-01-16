import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["home", "projects", "skills", "about", "contacts"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-[#262c33]/80 border-b border-white/10">
      <div className="h-[74px] flex items-center justify-between px-6 md:px-10">

        {/* LOGO */}
        <div className="font-semibold tracking-wide text-gray-200">
          suryakiran
        </div>

        {/* LINKS */}
        <nav className="hidden md:flex gap-8 relative">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative text-xs transition ${
                active === id
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              #{id}

              {/* ACTIVE UNDERLINE */}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-400"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              {/* GLOW */}
              {active === id && (
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-6 bg-purple-500/30 blur-xl" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;