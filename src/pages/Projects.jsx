import { Github, ExternalLink } from 'lucide-react';
import Card from '../components/Card';

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
    <div className="h-[calc(100vh-4rem)] overflow-y-auto bg-white dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}