import {
  GraduationCap,
  BookOpen,
  CalendarDays,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My academic
            <span> foundation.</span>
          </h2>

          <p className="section-description">
            My Computer Science studies have provided the foundation
            for the technical skills I continue to develop through
            projects and practical learning.
          </p>
        </div>

        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div className="education-content">

            <div className="education-header">

              <div>
                <h3>Computer Science</h3>

                <h4>
                  Haramaya University
                </h4>
              </div>

              <span className="education-period">
                <CalendarDays size={15} />
                Recent Graduate 
              </span>

            </div>

            <p className="education-description">
              I Studied the fundamental principles of computer science,
              software development, databases, computer networks,
              operating systems, algorithms, security, and other areas
              of computing.
            </p>

            <div className="coursework">

              <div className="coursework-title">
                <BookOpen size={17} />
                Relevant Areas
              </div>

              <div className="coursework-list">

                <span>Data Structures & Algorithms</span>
                <span>Database Systems</span>
                <span>Computer Networks</span>
                <span>Operating Systems</span>
                <span>Software Engineering</span>
                <span>Computer Security</span>
                <span>Machine Learning</span>
                <span>Computer Graphics</span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}