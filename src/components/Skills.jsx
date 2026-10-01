import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 size={22} />,
    title: "Programming Languages",
    description:
      "Languages I use for development, problem solving, and application building.",
    skills: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "SQL",
    ],
  },
  {
    icon: <Monitor size={22} />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
  {
    icon: <Server size={22} />,
    title: "Backend & APIs",
    description:
      "Developing server-side applications and REST APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "REST APIs",
    ],
  },
  {
    icon: <Database size={22} />,
    title: "Databases",
    description:
      "Working with relational and NoSQL databases for application development.",
    skills: [
      "MySQL",
      "MongoDB",
      "SQLite",
    ],
  },
  {
    icon: <BrainCircuit size={22} />,
    title: "AI Development",
    description:
      "Building practical applications with AI-powered functionality.",
    skills: [
      "Groq AI",
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "Core & Tools",
    description:
      "Computer science fundamentals and tools used in software development.",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">SKILLS</span>

          <h2>
            Technologies I use to
            <span> build and solve.</span>
          </h2>

          <p>
            A practical technology stack covering programming,
            frontend, backend, databases, AI development, and
            core computer science.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>{group.title}</h3>
              </div>

              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
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