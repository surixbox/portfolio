import { motion } from "framer-motion";
import profile from "../assets/Profile.png";
import TypingText from "./TypingText";
// import SoftParticles from "./SoftParticles";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= BACKGROUND LIGHT EFFECT ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Purple glow */}
        <div
          className="
            absolute
            top-[-120px] left-1/4
            w-[520px] h-[520px]
            bg-[radial-gradient(circle,rgba(192,132,252,0.35),transparent)]
            blur-3xl
          "
        />

        {/* Soft blue/purple glow */}
        <div
          className="
            absolute
            bottom-[-150px] right-[-100px]
            w-[600px] h-[600px]
            bg-[radial-gradient(circle,rgba(147,197,253,0.25),transparent)]
            blur-3xl
          "
        />
      </div>
      {/* ============================================================ */}

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-24 items-center px-6">

        {/* LEFT CONTENT */}
        <motion.div
          className="lg:pl-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-400 mb-3 text-sm tracking-wide">
            Hi, I am
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            SURYAKIRAN <span className="text-purple-400">U</span>
          </h1>

          {/* 🔥 TYPING EFFECT HERE */}
          <h2 className="mt-5 text-xl font-semibold text-purple-400 min-h-[28px]">
            <TypingText text="Frontend-Focused Full-Stack Developer" />
          </h2>

          <p className="mt-6 max-w-md text-gray-400 leading-relaxed">
            I design and build clean, responsive, and scalable web applications
            with strong frontend fundamentals and thoughtful UI architecture.
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="px-6 py-3 border border-purple-400 text-purple-400 text-sm
                         hover:bg-purple-400 hover:text-black transition"
            >
              Contact me →
            </a>

            <a
              href="https://drive.google.com/file/d/11V3ASE8ItU2raLpcJqYcH6VEYV_JkFWI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-400 text-purple-400 text-sm
                         hover:bg-purple-400 hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center lg:justify-end lg:pr-12"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          {/* FRAME */}
          <motion.div
            className="
              absolute
              top-16
              right-24
              w-[300px]
              h-[360px]
              border-2
              border-purple-400
              opacity-90
              z-0
              hidden lg:block
            "
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* IMAGE */}
          <motion.img
            src={profile}
            alt="Suryakiran profile photo"
            className="w-[260px] md:w-[360px] grayscale relative z-10"
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* DOT PATTERN */}
          <motion.div
            className="
              absolute
              right-1
              top-1/2
              -translate-y-1/2
              w-44
              h-44
              opacity-40
              hidden lg:block
            "
            style={{
              backgroundImage:
                "radial-gradient(#9ca3af 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
            animate={{ opacity: [0.25, 0.4, 0.25] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
