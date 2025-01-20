import { Github, ExternalLink } from "lucide-react";
import SkillTag from "./SkillTag";
import "../styles/project-role.css";

export default function ProjectRole({
  title,
  description,
  skills,
  github,
  live,
  id,
  onSkillClick,
  highlightedSkill,
}) {
  return (
    <div
      id={id}
      className={`project-role ${
        highlightedSkill && skills.includes(highlightedSkill)
          ? "highlighted"
          : ""
      }`}
    >
      <div className="project-role-content">
        <dt className="project-role-title">{title}</dt>
        <dd className="project-role-description">{description}</dd>
        <div className="project-role-skills">
          {skills.map((skill) => (
            <SkillTag
              key={skill}
              name={skill}
              onClick={() => onSkillClick(skill)}
              isHighlighted={skill === highlightedSkill}
            />
          ))}
        </div>
      </div>

      <div className="project-role-links">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-role-link"
        >
          <Github className="project-role-icon" />
          <span>Code</span>
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-role-link"
        >
          <ExternalLink className="project-role-icon" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
}
