import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Code Reviewer",
    category: "AI / FULL STACK",
    description:
      "An AI-powered code review platform that analyzes source code and provides automated feedback, suggestions, and improvement insights.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "Groq AI"],
    github: "https://github.com/Divyanshu-official/Code_Reviewer",
    demo: "https://code-reviewer-self-rho.vercel.app/",
  },
  {
    title: "AttendX",
    category: "FULL STACK / NETWORK",
    description:
      "A Wi-Fi hotspot-based attendance management system that verifies students through the local network before registration and attendance.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Divyanshu-official/AttendX",
    demo: "https://attendx-public-dev.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">PROJECTS</span>

          <h2>
            Things I've <span>Built.</span>
          </h2>

          <p>
            A selection of practical projects that demonstrate my skills in
            full-stack development, AI integration, backend development,
            and problem solving.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="project-card-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;