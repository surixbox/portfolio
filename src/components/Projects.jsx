import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  const projectsData = [
    {
      title: "Login & Registration System",
      description: "A secure authentication system with JWT validation, protected routing, and role-based access control.",
      tech: ["React", "Node.js", "PostgreSQL", "NestJS"],
      image: project1,
      live: "#",
      github: "https://github.com/suribox/login-system"
    },
    {
      title: "Student Record Manager",
      description: "A CRUD-based web application for managing student records with sorting and filtering functionality.",
      tech: ["Angular", "NestJS"],
      image: project2,
      live: "my-nest-app-tan.vercel.app",
      github: "https://github.com/suribox/student-records"
    },
    {
      title: "OTT Movie Clone Application",
      description: "A responsive movie browsing platform using TMDB API with search and details view.",
      tech: ["React", "REST API", "Tailwind CSS"],
      image: project3,
      live: "#",
      github: "https://github.com/suribox/movie-clone"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-[var(--color-border)]">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Featured <span className="text-gradient-blue">Projects</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl text-lg">
              Recent Work & Personal Projects
            </p>
          </div>

          <a href="https://github.com/suribox" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] transition-colors">
            <span>View All on GitHub</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;