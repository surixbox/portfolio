import { motion } from "framer-motion";
import profile from "../assets/Profile.png";
import TypingText from "./TypingText";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          {/* Availability Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] mb-8 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[var(--color-text-secondary)] text-xs font-semibold tracking-wide uppercase">Open for Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6">
            Hi, I’m SURYAKIRAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]">
              Front-End Developer
            </span>
          </h1>

          <div className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-8">
            <TypingText text="A frontend-focused engineering student building clean, responsive, and user-friendly web applications." />
            <p className="mt-4 text-base">
              Specializing in React and Angular, with growing expertise in backend technologies. I focus on writing maintainable code and creating smooth user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white font-medium hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-text-secondary)] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-[var(--color-text-secondary)] text-sm font-medium">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">15+</span>
              <span>Projects</span>
            </div>
            <div className="w-px h-10 bg-[var(--color-border)]"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">100%</span>
              <span>Satisfaction</span>
            </div>
            <div className="w-px h-10 bg-[var(--color-border)]"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">5+</span>
              <span>Technologies</span>
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            {/* Abstract Background blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

            {/* Profile Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-[var(--color-bg-secondary)] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={profile}
                alt="Suryakiran"
                className="w-full h-full object-cover bg-[var(--color-bg-secondary)]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
