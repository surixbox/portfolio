import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 scroll-mt-24 overflow-hidden"
    >
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_60%_40%,rgba(192,132,252,0.08),transparent_70%)]
        "
      />

      <div className="container mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-xl font-medium mb-16 text-[color:var(--accent)] flex items-center gap-4">
          #skills
          <span className="w-32 h-px bg-[color:var(--accent)] opacity-60" />
        </h2>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="relative hidden lg:block max-w-sm">
            <p className="text-[color:var(--muted)] leading-relaxed">
              A focused frontend stack built around modern JavaScript,
              scalable UI architecture, and clean development practices.
            </p>

            {/* ACCENT LINE */}
            {/* <div className="mt-8 w-20 h-px bg-[color:var(--accent)] opacity-60" /> */}

            {/* DECOR */}
            <div
              className="mt-10 w-24 h-24 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
            <div className="absolute top-28 left-8 w-24 h-24 border border-[color:var(--accent)] opacity-60" />
            <div className="absolute top-40 left-20 w-24 h-24 border border-[color:var(--accent)] opacity-40" />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* LANGUAGES (PRIMARY) */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                md:col-span-2
                group relative rounded-xl
                bg-white/[0.07] backdrop-blur-md
                border border-white/10
                p-6 transition-all duration-300
                hover:border-[color:var(--accent)]
              "
            >
              <h4 className="text-[color:var(--accent)] mb-3">
                Languages
              </h4>
              <p className="text-[color:var(--muted)] text-sm leading-relaxed">
                JavaScript, TypeScript, Python
              </p>
            </motion.div>

            {/* FRAMEWORKS */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                group relative rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                p-6 transition-all duration-300
                hover:border-[color:var(--accent)]
              "
            >
              <h4 className="text-[color:var(--accent)] mb-3">
                Frameworks
              </h4>
              <p className="text-[color:var(--muted)] text-sm leading-relaxed">
                React, Angular, NestJS
              </p>
            </motion.div>

            {/* DATABASES */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                group relative rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                p-6 transition-all duration-300
                hover:border-[color:var(--accent)]
              "
            >
              <h4 className="text-[color:var(--accent)] mb-3">
                Databases
              </h4>
              <p className="text-[color:var(--muted)] text-sm leading-relaxed">
                PostgreSQL, SQLite
              </p>
            </motion.div>

            {/* OTHER (FULL WIDTH SUPPORTING) */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                md:col-span-2
                group relative rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                p-6 transition-all duration-300
                hover:border-[color:var(--accent)]
              "
            >
              <h4 className="text-[color:var(--accent)] mb-3">
                Other
              </h4>
              <p className="text-[color:var(--muted)] text-sm leading-relaxed">
                HTML, CSS, Tailwind CSS, Git, REST APIs
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
