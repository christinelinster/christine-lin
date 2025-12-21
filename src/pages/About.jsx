import ExperienceRole from "../components/ExperienceRole";
import experiences from "../data/experiences";
import degrees from "../data/degrees";
import "../styles/about.css";

export default function About() {
  return (
    <div className="container about-container">
      <div className="about-content">
        <div className="about-grid">

          <div className="about-sidebar">
            <h2 className="about-title">{'[ About Me ]'}</h2>
            <div className="about-text">
              <p className="about-description">
                I am a software engineer with a background in building and scaling B2B SaaS products,
                focused on writing production-grade code across the full stack.
              </p>
              <p className="about-description">
                My path into engineering started at a hackathon where my team built <a className="about-link" href="https://www.devpost.com/software/dose-lt7i2o">Dose</a>.
                That spark led me to pursue a career in tech strategy, where I spent over 4 years as Oracle Practice Lead.
              </p>
              <p className="about-description">
                Working with engineering teams shifted my focus toward low-level implementation details.
                To deepen my technical foundation, I completed Launch School’s mastery-based curriculum.
              </p>
              <p className="about-description">
                Today, I build software with a strong foundation in both the “how” and the “why.”
              </p>
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
                    id={`role-${experience.skills[0]}`}
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
                  <ExperienceRole
                    key={deg.title}
                    id={`role-${deg.skills[0]}`}
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