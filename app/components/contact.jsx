import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <div className="section-heading contact-heading">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="section-description">
            I'm open to opportunities, collaborations, and conversations
            about technology, software development, and IT.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}

          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:firabire30@gmail.com">
                  firabire30@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div>
                <span>Phone</span>

                <a href="tel:+251930904458">
                  +251930904458
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>

                <p>Ethiopia</p>
              </div>
            </div>

            <div className="contact-socials">

              <a
                href="https://github.com/Firaolbirhanu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/firaol-birhanu-8798b1415"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

            <a
              href="/cv.pdf"
              className="download-cv"
              download
            >
              <Download size={18} />
              Download My CV
            </a>

          </div>

          {/* Contact Form */}

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="How can I help?"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="7"
                placeholder="Write your message..."
                required
              />

            </div>

            <button
              type="submit"
              className="send-button"
            >
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}