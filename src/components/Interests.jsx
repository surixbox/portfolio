import { motion } from "framer-motion";

function Interests() {
    const softSkills = [
        "Problem Solving", "Teamwork", "Time Management",
        "Self-Learning", "Adaptability", "Communication Skills"
    ];

    const interests = [
        "Web UI/UX Design", "Open Source Contribution", "Learning New Frameworks",
        "Exploring New Technologies", "Building Personal Projects"
    ];

    const values = [
        "Clean & Maintainable Code", "Continuous Learning", "Performance Optimization",
        "Accessibility", "User-Centered Design", "Ethical Development"
    ];

    const Section = ({ title, items, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-[var(--color-bg-secondary)]/50 p-8 rounded-2xl border border-[var(--color-border)]"
        >
            <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-accent)] transition-all cursor-default">
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section className="py-24 bg-[var(--color-bg-primary)]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Section title="Soft Skills" items={softSkills} delay={0} />
                    <Section title="Interests" items={interests} delay={0.1} />
                    <Section title="Professional Values" items={values} delay={0.2} />
                </div>
            </div>
        </section>
    );
}

export default Interests;
