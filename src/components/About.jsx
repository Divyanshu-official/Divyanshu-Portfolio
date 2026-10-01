import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">ABOUT ME</span>
          <h2>
            Building solutions with
            <span> code & curiosity.</span>
          </h2>
          <p>
            A little about my journey, my approach to development,
            and what I am focused on building.
          </p>
        </motion.div>

        <div className="about-grid">

          {/* About Text */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm <strong>Divyanshu Pal</strong>, a Computer Science and
              Engineering graduate with a strong interest in software
              development and modern web technologies.
            </p>

            <p>
              I enjoy turning ideas into practical applications. My
              experience includes building full-stack web applications,
              AI-powered tools, and systems that solve real-world problems.
            </p>

            <p>
              I work with technologies across the frontend, backend and
              AI development stack, and I continuously learn new tools
              to improve the way I design and build software.
            </p>

            <p>
              Currently, I'm focused on opportunities where I can contribute
              as a software engineer, strengthen my engineering skills,
              and work on products that have real users and real impact.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <span className="highlight-number">01</span>
                <div>
                  <h3>Problem Solver</h3>
                  <p>
                    I enjoy breaking complex problems into simple,
                    practical solutions.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">02</span>
                <div>
                  <h3>Project Focused</h3>
                  <p>
                    I learn by building real applications rather than
                    only studying theory.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">03</span>
                <div>
                  <h3>Always Learning</h3>
                  <p>
                    I continuously explore modern technologies and
                    improve my development skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats / Quick Info */}
          <motion.div
            className="about-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-panel-header">
              <span className="panel-dot"></span>
              <span>developer.profile</span>
            </div>

            <div className="profile-row">
              <span>Education</span>
              <strong>B.Tech CSE</strong>
            </div>

            <div className="profile-row">
              <span>University</span>
              <strong>Amity University Gwalior</strong>
            </div>

            <div className="profile-row">
              <span>Graduation</span>
              <strong>2026</strong>
            </div>

            <div className="profile-row">
              <span>CGPA</span>
              <strong>7.76</strong>
            </div>

            <div className="profile-row">
              <span>Focus</span>
              <strong>Software Engineering</strong>
            </div>

            <div className="profile-row">
              <span>Development</span>
              <strong>Full Stack + AI</strong>
            </div>

            <div className="profile-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Flask</span>
              <span>MongoDB</span>
              <span>AI</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;