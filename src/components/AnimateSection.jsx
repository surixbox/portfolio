import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../animations/variants";

function AnimateSection({ children, direction = "up" }) {
  const variants =
    direction === "left"
      ? fadeLeft
      : direction === "right"
      ? fadeRight
      : fadeUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-120px",
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateSection;
