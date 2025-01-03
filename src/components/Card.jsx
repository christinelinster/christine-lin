import { Github, ExternalLink } from 'lucide-react';

export default function Card({ project }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
            <span className="ml-2">Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="ml-2">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
