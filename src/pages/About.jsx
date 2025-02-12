import { useState } from "react";
import { ExternalLink } from "lucide-react";
import SkillTag from "../components/SkillTag";
import ExperienceRole from "../components/ExperienceRole";
import ProjectRole from "../components/ProjectRole";
import projects from "../data/projects"
import experiences from "../data/experiences";
import certifications from "../data/certifications";
import "../styles/about.css";

const skills = [];

export default function About() {
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setHighlightedSkill(highlightedSkill === skill ? null : skill);

    if (skill) {
      // Find first experience or project with this skill
      const firstExperience = experiences.find((exp) =>
        exp.skills.includes(skill)
      );
      const firstProject = projects.find((proj) => proj.skills.includes(skill));

      // Get the DOM elements
      const experienceElement = firstExperience
        ? document.getElementById(`role-${firstExperience.skills[0]}`)
        : null;
      const projectElement = firstProject
        ? document.getElementById(`project-${firstProject.skills[0]}`)
        : null;

      // Scroll to whichever element appears first in the DOM
      if (experienceElement && projectElement) {
        const experienceRect = experienceElement.getBoundingClientRect();
        const projectRect = projectElement.getBoundingClientRect();

        if (experienceRect.top <= projectRect.top) {
          experienceElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } else {
          projectElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      } else if (experienceElement) {
        experienceElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  // Update skills array to include all unique skills from both experiences and projects
  const allSkills = [
    ...new Set([
      ...skills,
      ...projects.flatMap((project) => project.skills),
      ...experiences.flatMap((experience) => experience.skills),
    ]),
  ].sort();

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-grid">
          <div className="about-section">
            <div className="about-flex">
              <div className="about-main">
                <h2 className="about-title">About Me</h2>
                <div className="about-text">
                  <p className="about-description">
                    Hi! I'm a self-taught software engineer on a mission to
                    transform curiosity into creation. While earning my business
                    degree at Western University's Ivey Business School, I
                    discovered my interest in tech during a hackathon where my
                    team built{" "}
                    <a
                      className="about-link"
                      href="https://www.devpost.com/software/dose-lt7i2o"
                    >
                      Dose
                    </a>
                    , a gamified medication reminder app that won "Best Green
                    Hack" by TD. Though I lacked coding experience, the
                    experience ignited a desire to build and create.
                  </p>
                  <p className="about-description">
                    After years of working closely with software teams in a tech
                    strategy and leadership position, my curiosity grew into
                    action. I've since immersed myself in programming, learning
                    to bring ideas to life through code. Combining business
                    acumen with my ever-growing technical skillset, I create
                    impactful solutions to real-world challenges and continually
                    grow as a software engineer.
                  </p>
                  <p className="about-description">
                    Let's connect and chat! I'm always eager to meet new people,
                    gain fresh perspectives, and collaborate to turn ideas into
                    impactful creations.
                  </p>
                </div>
              </div>
              <div className="certifications-section">
                <h3 className="section-title">Certifications</h3>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <h4 className="certification-title">{cert.title}</h4>
                      <a
                        href={`/src/assets/${cert.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                      >
                        <p className="certification-details">
                          {cert.issuer} • {cert.date}
                        </p>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">Skills</h3>
            <div className="skills-container">
              {allSkills.map((skill) => (
                <SkillTag
                  key={skill}
                  name={skill}
                  onClick={() => handleSkillClick(skill)}
                  isHighlighted={skill === highlightedSkill}
                />
              ))}
            </div>
          </div>

          <div className="section">
            <div className="experience-header">
              <h3 className="section-title">Experience</h3>
              <a
                href="/src/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                <span className="resume-text">View Resume</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <dl className="experience-list">
              {experiences.map((experience) => (
                <ExperienceRole
                  key={experience.title}
                  id={`role-${experience.skills[0]}`}
                  {...experience}
                  onSkillClick={handleSkillClick}
                  highlightedSkill={highlightedSkill}
                />
              ))}
            </dl>
          </div>

          <div className="section">
            <h3 className="section-title">Featured Projects</h3>
            <dl className="projects-list">
              {projects.map((project) => (
                <ProjectRole
                  key={project.title}
                  id={`project-${project.skills[0]}`}
                  {...project}
                  onSkillClick={handleSkillClick}
                  highlightedSkill={highlightedSkill}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
