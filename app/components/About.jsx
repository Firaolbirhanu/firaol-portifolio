import { GraduationCap, Code2, Server, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning curiosity into
            <span> practical solutions.</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm a Computer Science Graduate with a strong interest in
              technology, software development, and IT infrastructure.
              I enjoy understanding how systems work and using technology
              to solve practical problems.
            </p>

            <p>
              My experience so far has involved building web applications,
              working with databases, exploring machine learning, and
              learning about computer networks, operating systems,
              cybersecurity, and system administration.
            </p>

            <p>
              I'm continuously improving my technical skills through
              learning, personal projects, and hands-on
              experimentation. My long-term goal is to become a versatile
              IT professional capable of working across software,
              infrastructure, and security.
            </p>

          </div>

          <div className="about-cards">

            <div className="about-card">
              <div className="about-card-icon">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3>Computer Science</h3>
                <p>Academic foundation in computing and technology.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Code2 size={24} />
              </div>

              <div>
                <h3>Software Development</h3>
                <p>Building practical web applications and systems.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Server size={24} />
              </div>

              <div>
                <h3>IT Infrastructure</h3>
                <p>Learning systems, networking, and administration.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3>IT & Security</h3>
                <p>Exploring cybersecurity and IT auditing concepts.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}