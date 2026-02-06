import { useEffect, useState } from "react";

function ScrollGlow() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35); // control speed here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Main glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px]
                   bg-[radial-gradient(circle,rgba(192,132,252,0.22),transparent)]
                   blur-[120px]"
        style={{
          top: `${-200 + offset}px`,
        }}
      />

      {/* Secondary softer glow */}
      <div
        className="absolute left-1/3 w-[600px] h-[600px]
                   bg-[radial-gradient(circle,rgba(147,197,253,0.18),transparent)]
                   blur-[140px]"
        style={{
          top: `${200 + offset * 0.6}px`,
        }}
      />
    </div>
  );
}

export default ScrollGlow;
