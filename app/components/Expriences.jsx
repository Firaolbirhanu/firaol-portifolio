import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    title: "Softaware development Intern",
    company: "Awash International Bank",
    location: "Ethiopia",
    period: "Internship",
    description:
      "Gained practical exposure to an organizational development environment and learned how technology supports business operations, security, and day-to-day activities within a banking environment.",
    responsibilities: [
      "Supported day-to-day development-related activities",
      "Gained exposure to organizational IT infrastructure",
      "Learned about IT asset and device management",
      "Developed practical understanding of softaware development- in a banking environment",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>
            Where I've gained
            <span> practical experience.</span>
          </h2>

          <p className="section-description">
            My professional experience combined with hands-on projects
            has helped me connect academic knowledge with real-world
            technology environments.
          </p>
        </div>

        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div className="experience-item" key={experience.title}>

              <div className="experience-marker">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="experience-card">

                <div className="experience-header">

                  <div>
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-period">
                    <CalendarDays size={15} />
                    {experience.period}
                  </span>

                </div>

                <div className="experience-location">
                  <MapPin size={15} />
                  {experience.location}
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-responsibilities">

                  {experience.responsibilities.map((item) => (
                    <div
                      className="responsibility"
                      key={item}
                    >
                      <span className="responsibility-dot"></span>
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}