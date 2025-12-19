import ExperienceRole from "../components/ExperienceRole";
import experiences from "../data/experiences";
import "../styles/about.css";

export default function About() {

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-grid">
          <div className="about-section">
            <div className="about-flex">
              <div className="about-main">
                <h2 className="about-title">{'[ About Me ]'}</h2>
                <div className="about-text">
                  <p className="about-description">
                    I am a software engineer with a background in building and scaling B2B SaaS products,
                    focused on writing production-grade code across the full stack.
                    I build applications using Python, Flask, PostgreSQL, and React,
                    owning the entire lifecycle from data modeling and authentication to deployment.
                  </p>
                  <p className="about-description">
                    My path into engineering started at a hackathon where my team built <a
                      className="about-link"
                      href="https://www.devpost.com/software/dose-lt7i2o"
                    >
                      Dose
                    </a>
                    , an award-winning medication reminder app. That spark led me to pursue a career in tech strategy,
                    where I spent over 4 years as Oracle Practice Lead.
                    I managed product roadmaps in JIRA,
                    collaborated with engineering teams through Agile cycles,
                    and shipped cloud-native retail applications to large multinational retailers.
                  </p>
                  <p className="about-description">
                    Working with engineering teams shifted my focus toward low-level implementation details.
                    I didn't just want to manage the roadmap; I wanted to build the engine. To deepen my technical foundation, I completed Launch School’s mastery-based software engineering curriculum,
                    focusing on software fundamentals, system architecture, and database design.
                  </p>
                  <p className="about-description">

                  </p>
                  <p className="about-description">
                    Today, I build software with a strong foundation in both the “how” and the “why”,
                    designing systems that are both technically sound and aligned with business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>


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


        </div>
      </div>
    </div>
  );
}
