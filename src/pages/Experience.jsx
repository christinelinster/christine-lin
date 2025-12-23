import ExperienceRole from "../components/ExperienceRole";
import experiences from "../data/experiences";
import degrees from "../data/degrees";
import "../styles/experience.css"; // Make sure to import the new CSS

const Experience = () => {
  return (
    <div className="container experience-container">
      <div className="experience-content">

        {/* SECTION 1: WORK EXPERIENCE */}
        <div className="section">
          <div className="experience-header">
            <h2 className="experience-title">{'[ Professional Experience ]'}</h2>
          </div>
          <dl className="experience-list">
            {experiences.map((experience) => (
              <ExperienceRole
                key={experience.title}
                {...experience}
              />
            ))}
          </dl>
        </div>

        {/* SECTION 2: EDUCATION */}
        <div className="section">
          <div className="experience-header">
            <h2 className="section-title">{'[ Education & Technical Training]'}</h2>
          </div>
          <dl className="experience-list">
            {degrees.map((deg) => (
              <ExperienceRole
                key={deg.title}
                {...deg}
              />
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}

export default Experience;