import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">CONTACT</span>

          <h2>
            Let's <span>build something.</span>
          </h2>

          <p>
            Have an opportunity, project, or idea in mind?
            I'd be happy to connect and discuss it.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-icon">
              <MessageCircle size={25} />
            </div>

            <span className="contact-small-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's start a conversation.
            </h3>

            <p>
              I'm currently open to software engineering opportunities,
              internships, and development projects where I can contribute,
              learn, and build useful products.
            </p>

            <div className="contact-links">

              {/* EMAIL */}
              <a
                href="mailto:divyanshuofficials@gmail.com"
                className="contact-link"
              >
                <span className="contact-link-icon">
                  <Mail size={19} />
                </span>

                <span>
                  <small>Email</small>
                  <strong>
                    divyanshuofficials@gmail.com
                  </strong>
                </span>

                <ArrowUpRight size={18} />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Divyanshu-official"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon social-text-icon">
                  GH
                </span>

                <span>
                  <small>GitHub</small>
                  <strong>Divyanshu-official</strong>
                </span>

                <ArrowUpRight size={18} />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/divyanshu-pal-953695314/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon social-text-icon">
                  in
                </span>

                <span>
                  <small>LinkedIn</small>
                  <strong>Divyanshu Pal</strong>
                </span>

                <ArrowUpRight size={18} />
              </a>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="contact-visual">

            <div className="contact-code-window">

              <div className="contact-window-top">
                <span></span>
                <span></span>
                <span></span>

                <small>developer.js</small>
              </div>

              <div className="contact-code-content">

                <div>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span>{" "}
                  <span>=</span>{" "}
                  <span className="code-yellow">{"{"}</span>
                </div>

                <div className="code-indent">
                  <span className="code-key">name:</span>{" "}
                  <span className="code-green">
                    "Divyanshu Pal"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-key">role:</span>{" "}
                  <span className="code-green">
                    "Software Engineer"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-key">focus:</span>{" "}
                  <span className="code-green">
                    "Full Stack + AI"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-key">status:</span>{" "}
                  <span className="code-green">
                    "Open to opportunities"
                  </span>
                </div>

                <div>
                  <span className="code-yellow">{"}"}</span>;
                </div>

              </div>

            </div>

            <div className="contact-availability">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;