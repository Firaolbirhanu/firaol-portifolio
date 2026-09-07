import Image from "next/image";

import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

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

    github: "#",
    demo: "#",

    image: "/images/electronics-system.png",
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

    github: "#",
    demo: "#",

    image: "/images/weather-system.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">

          <p className="section-label">
            MY WORK
          </p>

          <h2>
            Projects I've
            <span> built.</span>
          </h2>

          <p className="section-description">
            A selection of projects that demonstrate my experience
            with software development, databases, machine learning,
            and practical problem solving.
          </p>

        </div>

        {/* Projects */}
        <div className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              {/* Project Image */}
              <div className="project-image">

                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="project-image-real"
                />

                <div className="project-category">
                  {project.category}
                </div>

              </div>

              {/* Project Content */}
              <div className="project-content">

                {/* Title + GitHub */}
                <div className="project-title-row">

                  <h3>
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    aria-label={`GitHub repository for ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>

                </div>

                {/* Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Features */}
                <div className="project-features">

                  {project.features.map((feature) => (
                    <span key={feature}>
                      {feature}
                    </span>
                  ))}

                </div>

                {/* Technologies */}
                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Project Actions */}
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

        {/* View All Projects */}
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
