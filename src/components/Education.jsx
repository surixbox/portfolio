import { motion } from "framer-motion";

function Education() {
    const certifications = [
        { name: "React Development", issuer: "Online Course" },
        { name: "Web Development Bootcamp", issuer: "Online Course" }
    ];

    return (
        <section id="education" className="py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* EDUCATION */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="p-2 bg-[var(--color-accent)]/10 rounded-lg text-[var(--color-accent)]">
                                🎓
                            </span>
                            Education
                        </h2>

                        <div className="relative pl-8 border-l-2 border-[var(--color-border)] ml-3 space-y-12">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[var(--color-bg-secondary)] bg-[var(--color-accent)]" />

                                <h3 className="text-xl font-bold text-white">B.E / B.Tech in Computer Science Engineering</h3>
                                <p className="text-[var(--color-accent)] font-medium mt-1">EASA College of Engineering and Technology</p>
                                <p className="text-[var(--color-text-secondary)] mt-2 italic">Final Year Student (2022 - 2026)</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >

                        <div className="relative pl-8 border-l-2 border-[var(--color-border)] ml-3 space-y-12">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[var(--color-bg-secondary)] bg-[var(--color-accent)]" />

                                <h3 className="text-xl font-bold text-white">Secondary School Leaving Certificate (SSLC)</h3>
                                <p className="text-[var(--color-accent)] font-medium mt-1">State Board VMHS School</p>
                                <p className="text-[var(--color-text-secondary)] mt-2 italic">2020</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >

                        <div className="relative pl-8 border-l-2 border-[var(--color-border)] ml-3 space-y-12">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[var(--color-bg-secondary)] bg-[var(--color-accent)]" />

                                <h3 className="text-xl font-bold text-white">Higher Secondary – Computer Science</h3>
                                <p className="text-[var(--color-accent)] font-medium mt-1">State Board VMHS School</p>
                                <p className="text-[var(--color-text-secondary)] mt-2 italic">2020 – 2022</p>
                            </div>
                        </div>
                    </motion.div>
                    

                    {/* CERTIFICATIONS */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <span className="p-2 bg-[var(--color-accent)]/10 rounded-lg text-[var(--color-accent)]">
                                📜
                            </span>
                            Certifications
                        </h2>

                        <div className="grid gap-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="p-5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors flex items-center justify-between group">
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">{cert.name}</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)]">{cert.issuer}</p>
                                    </div>
                                    <div className="bg-[var(--color-bg-secondary)] p-2 rounded-full text-[var(--color-text-secondary)] group-hover:text-white group-hover:bg-[var(--color-accent)] transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Education;
