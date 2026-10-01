function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-main">
          <p>
            © 2026 <strong>Divyanshu Pal</strong>
          </p>

          <p>
            Software Engineer • Full Stack Developer
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Divyanshu-official"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/divyanshu-pal-953695314/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:divyanshuofficials@gmail.com">
            Email
          </a>

          <a href="#home">
            Back to top ↑
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          Built with React & modern web technologies.
        </span>
      </div>
    </footer>
  );
}

export default Footer;