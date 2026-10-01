import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="status-dot"></span>
            Available for Software Engineering Opportunities
          </motion.div>

          <p className="hero-intro">Hi, I'm</p>

          <h1>
            Divyanshu
            <span> Pal</span>
          </h1>

          <h2>
            Software Engineer <span>|</span> Full Stack Developer
          </h2>

          <p className="hero-description">
            I build full-stack web applications and AI-powered solutions
            using modern technologies, with a focus on clean development,
            practical problem-solving, and real-world projects.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
              <span className="button-arrow">→</span>
            </a>

            <a
              href="/resume.pdf"
              className="secondary-button"
              download="Divyanshu-Pal-Resume.pdf"
            >
              Download Resume
              <span className="button-arrow">↓</span>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">
            <a
              href="https://github.com/Divyanshu-official"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <span className="social-icon">GH</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshu-pal-953695314/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span className="social-icon">in</span>
              LinkedIn
            </a>

            <a
              href="mailto:divyanshuofficials@gmail.com"
              aria-label="Email"
            >
              <span className="social-icon">@</span>
              Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - PROFILE PHOTO */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-photo-glow"></div>

          <div className="hero-photo-wrapper">
            <img
              src={profileImage}
              alt="Divyanshu Pal - Software Engineer"
              className="hero-profile-image"
            />
          </div>

          {/* FLOATING TECHNOLOGIES */}
          <div className="floating-tech tech-one">
            React
          </div>

          <div className="floating-tech tech-two">
            Python
          </div>

          <div className="floating-tech tech-three">
            Node.js
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}

export default Hero;