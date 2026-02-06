import { motion } from "framer-motion";

function Skills() {
  const skillsConfig = [
    {
      title: "Programming Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Frontend Technologies",
      items: ["React.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Technologies",
      items: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB (Basic)"]
    },
    {
      title: "Tools & Platforms",
      items: ["Git & GitHub", "VS Code", "Postman", "Docker (Basic)", "Figma (Basic)"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-secondary)] relative">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Technical <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Technologies & Tools I Work With
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsConfig.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-bg-primary)] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full"></span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] 
                      bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)]
                      group-hover:text-white group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20
                      transition-all duration-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
