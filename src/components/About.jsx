import { motion } from "framer-motion";
import aboutImg from "../assets/Profile2.png";
import { slideLeft, fadeUp } from "../animations/variants";

function About() {
  return (
    <section
      id="about"
      className="py-20 scroll-mt-24"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">

        {/* LEFT CONTENT */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <h2 className="text-xl font-medium mb-8 text-[color:var(--accent)]">
            #about
          </h2>

          <p className="text-[color:var(--muted)] leading-relaxed mb-5 max-w-xl">
            I’m a final-year engineering student focused on frontend development,
            with a strong interest in crafting clean, responsive, and accessible
            user interfaces. I value writing clear, maintainable code and
            continuously improving my development workflow.
          </p>

          <p className="text-[color:var(--muted)] leading-relaxed mb-8 max-w-xl">
            I have practical experience working with React and Angular and am
            currently exploring backend technologies to develop a deeper
            understanding of full-stack application development.
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-2 border border-[color:var(--accent)]
                       text-[color:var(--accent)] text-sm
                       hover:bg-[color:var(--accent)]
                       hover:text-black transition"
          >
            View all →
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="relative flex justify-center"
        >
          <img
            src={aboutImg}
            alt="Suryakiran portrait"
            className="w-[260px] grayscale"
          />

          {/* underline accent */}
          <div className="absolute -bottom-4 w-24 h-px bg-[color:var(--accent)] opacity-60" />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
