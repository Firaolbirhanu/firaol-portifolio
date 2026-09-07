import {
  Code2,
  Database,
  Server,
  Network,
  ShieldCheck,
  Palette,
  GitBranch,
  Terminal,
} from "lucide-react";
import Reveal from "./Reveal";
const skillCategories = [
  {
    icon: Code2,
    title: "Programming & Development",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Flask",
    ],
  },

  {
    icon: Database,
    title: "Databases",
    skills: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Database Design",
    ],
  },

  {
    icon: Server,
    title: "Systems",
    skills: [
      "Windows",
      "Linux",
      "System Administration",
      "Virtual Machines",
      "Troubleshooting",
    ],
  },

  {
    icon: Network,
    title: "Networking",
    skills: [
      "TCP/IP",
      "OSI Model",
      "IP Addressing",
      "DNS",
      "DHCP",
      "Network Troubleshooting",
    ],
  },

  {
    icon: ShieldCheck,
    title: "Security & IT",
    skills: [
      "Cybersecurity Fundamentals",
      "IT Auditing Fundamentals",
      "Access Control",
      "IT Asset Management",
    ],
  },

  {
    icon: Palette,
    title: "Design",
    skills: [
      "UI/UX Fundamentals",
      "Product Design",
      "Responsive Design",
    ],
  },

  {
    icon: GitBranch,
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
    ],
  },

  {
    icon: Terminal,
    title: "Other Technologies",
    skills: [
      "REST APIs",
      "QR Code Integration",
      "Machine Learning Fundamentals",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies &amp;
            <span> tools I work with.</span>
          </h2>

          <p className="section-description">
            A growing technical toolkit built through university studies,
            personal projects, and hands-on learning.
          </p>
        </div>

      <Reveal>
  <div className="skills-grid">

          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div className="skill-card" key={category.title}>

                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{category.title}</h3>

                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
              
            );
          })}

        </div>
</Reveal>
      </div>
    </section>
    
  );
  
}
