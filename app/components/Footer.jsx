import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              P<span>.</span>
            </a>

            <p>
              Computer Science Graduate , Software Developer&<br />
              Aspiring IT Professional.
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Firaolbirhanu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/firaol-birhanu-8798b1415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
            >
              <ArrowUp size={19} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} FIRAOL. All rights reserved.
          </p>

          <p>
            Built with Next.js & React.
          </p>
        </div>
      </div>
    </footer>
  );
}
