import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import projects from "../data/projects"
import '../styles/projects.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h2 className="projects-title">
            Recent Projects
          </h2>
          {/* <p className="projects-description">
            
          </p> */}
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}