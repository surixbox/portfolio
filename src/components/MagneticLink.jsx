import { motion } from "framer-motion";
import { useRef } from "react";

function MagneticLink({ children, href, active }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`relative text-xs transition ${
        active ? "text-purple-400" : "text-gray-400 hover:text-gray-200"
      }`}
    >
      {children}

      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-400"
        />
      )}
    </motion.a>
  );
}

export default MagneticLink;
