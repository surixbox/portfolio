import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
  fadeUp,
  staggerContainer,
} from "../animations/variants";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 scroll-mt-24"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-xl font-medium text-[color:var(--accent)]">
            #projects
          </h2>

          <span className="text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] cursor-pointer transition">
            View all →
          </span>
        </div>

        {/* PROJECT GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ProjectCard
              image={project1}
              tech="React • NestJS • PostgreSQL"
              title="Login & Registration System"
              desc="Secure authentication with protected routing."
              github="#"
              live="#"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ProjectCard
              image={project2}
              tech="Angular • JSON Server"
              title="Student Record Manager"
              desc="CRUD system for managing student data."
              github="https://github.com/surixbox/skyward.git"
              live="https://skyward-liard.vercel.app"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ProjectCard
              image={project3}
              tech="React • API • CSS"
              title="OTT Movie Clone"
              desc="Responsive UI with movie API integration."
              github="#"
              live="#"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
