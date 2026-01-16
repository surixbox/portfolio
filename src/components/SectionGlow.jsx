import { motion } from "framer-motion";

function SectionGlow({ children }) {
  return (
    <div className="relative">
      {/* Subtle background glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_50%_0%,rgba(192,132,252,0.12),transparent_65%)]
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {children}
    </div>
  );
}

export default SectionGlow;

