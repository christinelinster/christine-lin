import { Github, ExternalLink } from 'lucide-react';
import SkillTag from './SkillTag';
import '../styles/project-card.css';

export default function ProjectCard({ project, onSkillClick, highlightedSkill }) {
  const isHighlighted = highlightedSkill && project.skills.includes(highlightedSkill);

  return (
    <div className={`project-card ${isHighlighted ? 'highlighted' : ''}`}>
      <div className="project-content">
        <div className="project-main-info">
          <p className="project-overline">{project.overline}</p>
          <h3 className="project-title">{project.title}</h3>

          <div className="project-description-box">
            <p className="project-description">{project.description}</p>
          </div>

          <div className="project-technologies">
            {project.skills.map((skill) => (
              <SkillTag
                key={skill}
                name={skill}
                onClick={() => onSkillClick(skill)}
                isHighlighted={skill === highlightedSkill}
              />
            ))}
          </div>
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`project-link ${!project.github ? 'disabled' : ''}`} onClick={(e) => !project.github && e.preventDefault()} aria-label="GitHub Repository">
            <Github className="project-link-icon" />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={`project-link ${!project.live ? 'disabled' : ''}`} onClick={(e) => !project.github && e.preventDefault()} aria-label="Live Demo">
            <ExternalLink className="project-link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}