import ExperienceRole from "../components/ExperienceRole";
import experiences from "../data/experiences";
import DegreeRole from "../components/DegreeRole";
import degrees from "../data/degrees";
import "../styles/about.css";
import aboutContent from "../data/about";
import skills from "../data/skills";
import SkillTag from "../components/SkillTag";

export default function About() {
  return (
    <div className="container about-container">
      <div className="about-content">
        <div className="about-grid">

          <div className="about-sidebar">
            <h2 className="about-title">{'[ About Me ]'}</h2>
            <div className="about-text">
              {aboutContent.map((paragraph, index) => (
                <p key={index} className="about-description">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="about-skills-section">
              <p className="about-skills-title">{'Technical Skills'}</p>

              <div className="about-skills-container">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-category">
                    <h4 className="skill-category-title">{skillGroup.category}</h4>
                    <div className="skill-tags-wrapper">
                      {skillGroup.items.map((item) => (
                        <SkillTag
                          key={item}
                          name={item}
                          isHighlighted={false} // Default state
                          onClick={() => { }}    // No-op for static display
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="history-scroll-column">
            <div className="section">
              <div className="experience-header">
                <h2 className="section-title">{'[ Experience ]'}</h2>
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

            <div className="section">
              <div className="experience-header">
                <h2 className="section-title">{'[ Education ]'}</h2>
              </div>
              <dl className="experience-list">
                {degrees.map((deg) => (
                  <DegreeRole
                    key={deg.title}
                    {...deg}
                  />
                ))}
              </dl>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}