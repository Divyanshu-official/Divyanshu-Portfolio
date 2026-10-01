import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span>DP</span>
          <strong>Divyanshu Pal</strong>
        </a>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;