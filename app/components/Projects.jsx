import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Electronics Control System",
    category: "Web Application",
    description:
      "An electronics asset management system designed to help organizations register employees, manage electronic devices, assign devices to employees, and verify device withdrawals.",
    features: [
      "Employee registration",
      "Electronic device management",
      "QR-code verification",
      "Device withdrawal tracking",
    ],
    technologies: [
      "Next.js",
      "React",
      "Flask",
      "Python",
      "MySQL",
    ],
    github: "https://github.com/Firaolbirhanu/firaol-portifolio.git",
    demo: "https://electronics-control-system.onrender.com",
    image: "/electronics-system.png",
  },

  {
    id: 2,
    title: "Weather Condition Prediction System",
    category: "Machine Learning",
    description:
      "A weather prediction platform designed to use machine learning and weather data to provide predictions, visualization, and early-warning information for extreme weather conditions.",
    features: [
      "Weather prediction",
      "Data visualization",
      "Extreme weather alerts",
      "Early warning system",
    ],
    technologies: [
      "Next.js",
      "React",
      "Python",
      "Flask",
      "Machine Learning",
    ],
    github: "https://github.com/Firaolbirhanu/EastHararghe-weather-prediction-using-ml.git",
    demo: "#",
    image: null,
  },

  {
    id: 3,
    title: "IT Help Desk Management System",
    category: "Full-Stack Web Application",
    description:
      "A centralized support platform where employees can submit IT requests, technicians can manage assigned tickets, and administrators can oversee users and support activity.",
    features: [
      "Role-based access for administrators, technicians, and employees",
      "Ticket creation, assignment, and status tracking",
      "Ticket status history",
      "User, department, and category management",
      "PostgreSQL database with cloud deployment",
      "demo admin users: email= admin@ithelpdesk.com password= firaol3090 "
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com/Firaolbirhanu/it-helpdesk-management-system.git",
    demo: "https://it-helpdesk-management-system-das70zyla.vercel.app/",
    image: "/it-help-desk2.png",
  },

  {
    id: 4,
    title: "Smart Digital Marketing Solution",
    category: "Creative Agency Website",
    description:
      "A responsive website for my creative agency, built from scratch to showcase graphic design, video production, web development, photo shoots, and logo design services. Clients can create accounts to browse the full portfolio, while contact enquiries are emailed and stored in a database.",
    features: [
      "Teal and violet visual design",
      "Smooth scroll animations and responsive layouts",
      "Client registration and login",
      "Full project portfolio for signed-in clients",
      "Contact form with email delivery and database storage",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Firebase Database",
      "Firebase Hosting",
    ],
    github: "https://github.com/Firaolbirhanu/smart-digital-marketing-solution.git",
    demo: "https://smart-digital-marketing-ad0c1.web.app",
    image: "/smart-digital.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2>
            Projects I&apos;ve
            <span> built.</span>
          </h2>

          <p className="section-description">
            A selection of projects that demonstrate my experience
            with software development, databases, machine learning,
            and practical problem solving.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-image">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="project-image-real"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    {project.title}
                  </div>
                )}

                <div className="project-category">
                  {project.category}
                </div>
              </div>

              <div className="project-content">

                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <a
                    href={project.github}
                    aria-label={`GitHub repository for ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    className="project-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                    <FaGithub size={16} />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="all-projects">
          <a
            href="#"
            className="view-all-projects"
          >
            View More Projects
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
