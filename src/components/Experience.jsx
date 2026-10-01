import { motion } from "framer-motion";
import { Briefcase, Award, Calendar, MapPin } from "lucide-react";

function Experience() {
  const internships = [
    {
      organization: "Hunar Intern",
      role: "Web Development Intern",
      type: "Remote",
      duration: "Jun 2024 – Jul 2024",
      location: "Remote",
      points: [
        "Gained hands-on exposure to real-world web development projects and development practices.",
        "Worked on assigned development tasks to strengthen practical web development skills.",
        "Applied web development concepts through practical project-based work.",
      ],
      credential: "Certificate of Internship",
    },
    {
      organization: "Prodigy InfoTech",
      role: "Web Development Intern",
      type: "Educational Internship",
      duration: "Aug 2024",
      location: "Remote",
      points: [
        "Worked on assigned web development tasks and gained practical exposure to development workflows.",
        "Strengthened debugging, implementation, and problem-solving skills through hands-on tasks.",
        "Successfully completed the internship and received a Certificate of Completion and Letter of Recommendation.",
      ],
      credential: "Certificate of Completion + Letter of Recommendation",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">

        {/* SECTION HEADING */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">EXPERIENCE</span>

          <h2>
            Practical experience through
            <span> development.</span>
          </h2>

          <p>
            Hands-on experience gained through web development
            internships and practical development work.
          </p>
        </motion.div>

        {/* INTERNSHIPS */}
        <div className="experience-grid">
          {internships.map((internship, index) => (
            <motion.article
              className="experience-card"
              key={internship.organization}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              {/* TOP */}
              <div className="experience-card-top">
                <div className="experience-icon">
                  <Briefcase size={22} />
                </div>

                <span className="experience-type">
                  {internship.type}
                </span>
              </div>

              {/* MAIN CONTENT */}
              <div className="experience-content">
                <p className="experience-role">
                  {internship.role}
                </p>

                <h3>{internship.organization}</h3>

                <div className="experience-meta">
                  <span>
                    <Calendar size={15} />
                    {internship.duration}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {internship.location}
                  </span>
                </div>

                <ul className="experience-points">
                  {internship.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* CREDENTIAL */}
              <div className="experience-credential">
                <Award size={17} />
                <span>{internship.credential}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PRACTICAL LEARNING */}
        <motion.div
          className="practical-learning"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="learning-label">
            PRACTICAL LEARNING
          </div>

          <div className="learning-content">
            <div>
              <span className="learning-provider">
                Forage × Tata
              </span>

              <h3>
                Data Visualisation: Empowering Business
                with Effective Insights
              </h3>

              <p>
                Completed a practical data visualisation experience
                focused on creating effective visual insights and
                communicating analysis.
              </p>
            </div>

            <div className="learning-credential">
              <Award size={17} />
              Certificate of Completion
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;