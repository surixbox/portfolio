import { motion } from "framer-motion";
import aboutImg from "../assets/Profile2.png";

function About() {
  const highlights = [
    "Focus on maintainable code and smooth user experiences",
    "Balancing design and engineering for visual & technical excellence",
    "Highly motivated, detail-oriented, and committed to improvement"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[var(--color-accent)]"></span>
              <span className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase">About Me</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6 text-white">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]">Summary</span>
            </h2>

            <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
              <p className="font-medium text-[var(--color-text-primary)]">
                I am a final-year Computer Science Engineering student with a strong passion for frontend and full-stack web development. I specialize in building clean, responsive, and user-friendly web applications using modern technologies like React and Angular.
              </p>
              <p>
                Along with frontend skills, I am exploring backend development using Node.js and NestJS to become a well-rounded full-stack developer. I believe in continuous learning, clean coding practices, and building real-world projects that solve practical problems.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-white mb-4">Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 p-6 bg-[var(--color-bg-secondary)] rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="italic text-[var(--color-text-secondary)]">
                "I believe in building software the right way — with discipline, consistency, and respect for fundamentals. I value strong basics in programming, clean architecture, and long-term maintainability."
              </p>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
              <div className="absolute inset-0 bg-[var(--color-accent)]/10 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={aboutImg}
                alt="Suryakiran"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[var(--color-bg-secondary)]/90 backdrop-blur-md rounded-xl border border-[var(--color-border)] z-20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[var(--color-accent)]/20 p-2 rounded-lg text-[var(--color-accent)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Education</p>
                    <p className="font-bold text-white">Final Year B.E CSE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-[var(--color-border)] rounded-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
