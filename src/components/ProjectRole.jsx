import { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SkillTag from './SkillTag';
import '../styles/project-role.css';

export default function ProjectRole({ 
  title, 
  description, 
  technologies, 
  github, 
  live, 
  id, 
  onSkillClick, 
  highlightedSkill 
}) {
  useEffect(() => {
    if (highlightedSkill && id === `project-${highlightedSkill}`) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlightedSkill, id]);

  return (
    <div id={id} className={`project-role ${highlightedSkill && technologies.includes(highlightedSkill) ? 'highlighted' : ''}`}>
      <dt className="project-role-title">{title}</dt>
      <dd className="project-role-description">{description}</dd>
      <div className="project-role-skills">
        {technologies.map((tech) => (
          <SkillTag
            key={tech}
            name={tech}
            onClick={() => onSkillClick(tech)}
            isHighlighted={tech === highlightedSkill}
          />
        ))}
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
