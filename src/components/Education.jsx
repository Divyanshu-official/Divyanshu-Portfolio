import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">

        {/* SECTION HEADING */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">EDUCATION</span>

          <h2>
            My <span>academic foundation.</span>
          </h2>

          <p>
            My academic background in computer science and the foundation
            behind my software development journey.
          </p>
        </motion.div>

        {/* EDUCATION CARD */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="education-card-top">

            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <span className="education-badge">
              B.Tech • CSE
            </span>

          </div>

          <div className="education-content">

            <span className="education-label">
              COMPUTER SCIENCE & ENGINEERING
            </span>

            <h3>
              B.Tech in Computer Science & Engineering
            </h3>

            <h4>
              Amity University Gwalior
            </h4>

            <p>
              Developed a strong foundation in computer science,
              programming, data structures, databases, web development,
              software engineering, and problem solving.
            </p>

            {/* DETAILS */}
            <div className="education-details">

              <div className="education-detail">
                <Award size={17} />
                <span>
                  CGPA: <strong>7.76</strong>
                </span>
              </div>

              <div className="education-detail">
                <MapPin size={17} />
                <span>
                  Gwalior, Madhya Pradesh
                </span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Education;