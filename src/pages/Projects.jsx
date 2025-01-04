import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with detailed forecasts and interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h2 className="projects-title">
            My Projects
          </h2>
          <p className="projects-description">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
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