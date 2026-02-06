import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--color-bg-primary)]/90 backdrop-blur-md shadow-lg border-b border-[var(--color-border)] py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">S</span>
          <span className="font-display font-bold text-xl text-white tracking-tight group-hover:text-[var(--color-text-secondary)] transition-colors">
            suryakiran.dev
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2 bg-[var(--color-bg-secondary)]/50 p-1.5 rounded-full border border-[var(--color-border)]">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`
                relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full capitalize
                ${active === id ? "text-white bg-[var(--color-accent)] shadow-md" : "text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-tertiary)]"}
              `}
            >
              {id}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU TRIGGER */}
        <div className="md:hidden text-white">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;