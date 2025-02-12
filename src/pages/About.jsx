import { useState } from "react";
import { ExternalLink } from "lucide-react";
import SkillTag from "../components/SkillTag";
import ExperienceRole from "../components/ExperienceRole";
import ProjectRole from "../components/ProjectRole";
import "../styles/about.css";

//update the certifictions div to match the contact page div for contact information
//update links

const skills = ["React", "JavaScript", "Node.js", "Python", "AWS", "Docker"];

const certifications = [
  {
    title: "Kubernetes for the Absolute Beginner",
    issuer: "Udemy",
    date: "Nov 2024",
    link: "kubernetes.pdf"
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "Sep 2024",
    link: "webdev.pdf"
  },
  {
    title: "Certified Scrum Product Owner",
    issuer: "Scrum Alliance",
    date: "Sep 2024",
    link: "cspo.pdf"
  },
  {
    title: "The Complete SQL Bootcamp",
    issuer: "Udemy",
    date: "Feb 2024",
    link: "sql.pdf"
  },
  {
    title: "Agile Project Management Certification",
    issuer: "Google",
    date: "Nov 2023",
    link: "agile-pm.pdf"
  },
];

const experiences = [
  {
    title: "Oracle Practice Lead",
    company: "RedIron Technologies",
    period: "2021 - Present",
    description:
      "Spearheaded strategic initiatives to drive business growth, including defining partnership roadmaps, launching core products through joint go-to-market efforts, building revenue centers from the ground up, and fostering collaborative relationships to uncover opportunities, secure high-value deals, and enable scalable success.",
    skills: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Oracle Product Manager",
    company: "RedIron Technologies",
    period: "2021 - Present",
    description:
      "Drove product strategy by analyzing Oracle's Xstore product and retailer pain points, crafting targeted value propositions and use cases, and refining positioning through customer interviews and market research. Led a successful pilot and rollout to 500+ stores while enhancing lead generation with SEO-optimized case study webpages showcasing project successes.",
    skills: ["React", "JavaScript", "Python", "Node.js"],
  },
  {
    title: "Oracle Project Manager",
    company: "RedIron Technologies",
    period: "2021 - Present",
    description:
      "Led agile sprint cycles and managed product roadmaps in JIRA to deliver a Progressive Web App to production. Spearheaded a company-wide KPI initiative by defining key metrics and implementing Smartsheet dashboards to drive alignment and foster a data-driven culture.",
    skills: ["React", "JavaScript", "Python", "Node.js"],
  },
];

const projects = [
  {
    title: "Task Trackr",
    description: "A full-featured to-do list built with React and Node.js",
    skills: ["React", "Node.js", "PostgreSQL", "Express.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    skills: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard with detailed forecasts and interactive maps",
    skills: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

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
