import { Github, ExternalLink } from 'lucide-react';
import '../styles/project-card.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-details">
          <h3 className="project-title">
            {project.title}
          </h3>
          <p className="project-description">
            {project.description}
          </p>
          <div className="project-technologies">
            {project.skills.map((tech) => (
              <span
                key={tech}
                className="technology-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github className="project-link-icon" />
            <span className="project-link-text">Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink className="project-link-icon" />
            <span className="project-link-text">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
