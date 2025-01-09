import { useState } from 'react';
import { Dumbbell, Camera, Music2, Code2, Laptop, BookOpen, Trophy, Snowflake, ExternalLink } from 'lucide-react';
import InterestCard from '../components/InterestCard';
import SkillTag from '../components/SkillTag';
import ExperienceRole from '../components/ExperienceRole';
import ProjectRole from '../components/ProjectRole';
import '../styles/about.css';

const hobbies = [
  { icon: Trophy, name: 'Basketball' },
  { icon: Dumbbell, name: 'Weightlifting' },
  { icon: Snowflake, name: 'Snowboarding' },
  { icon: Camera, name: 'Photography' },
  { icon: Music2, name: 'Music' },
  { icon: Code2, name: 'Coding' },
  { icon: Laptop, name: 'Technology' },
  { icon: BookOpen, name: 'Reading' },
];

const skills = ['React', 'JavaScript', 'Node.js', 'Python', 'AWS', 'Docker'];

const experiences = [
  {
    title: 'Senior Developer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Led the development of a high-performance e-commerce platform serving millions of users. Implemented microservices architecture and improved system reliability.',
    skills: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple web applications using modern JavaScript frameworks. Created RESTful APIs and implemented automated testing.',
    skills: ['React', 'JavaScript', 'Python', 'Node.js']
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    skills: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with detailed forecasts and interactive maps',
    skills: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function About() {
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setHighlightedSkill(highlightedSkill === skill ? null : skill);

    if (skill) {
      // Find first experience or project with this skill
      const firstExperience = experiences.find(exp => exp.skills.includes(skill));
      const firstProject = projects.find(proj => proj.skills.includes(skill));

      // Get the DOM elements
      const experienceElement = firstExperience ? document.getElementById(`role-${firstExperience.skills[0]}`) : null;
      const projectElement = firstProject ? document.getElementById(`project-${firstProject.skills[0]}`) : null;

      // Scroll to whichever element appears first in the DOM
      if (experienceElement && projectElement) {
        const experienceRect = experienceElement.getBoundingClientRect();
        const projectRect = projectElement.getBoundingClientRect();
        
        if (experienceRect.top <= projectRect.top) {
          experienceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (experienceElement) {
        experienceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Update skills array to include all unique skills from both experiences and projects
  const allSkills = [...new Set([
    ...skills,
    ...projects.flatMap(project => project.skills),
    ...experiences.flatMap(experience => experience.skills)
  ])].sort();

  return (
    <div className="about-container">
      <div className="about-content">
        <div>
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a passionate self- taught developer with over 5 years of experience in building web applications.
            My journey in tech started when I built my first website, and I've been hooked ever since.
          </p>

          <div className="section">
            <h3 className="section-title">Hobbies & Interests</h3>
            <div className="hobbies-grid">
              {hobbies.map((hobby) => (
                <InterestCard key={hobby.name} Icon={hobby.icon} name={hobby.name} />
              ))}
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
                href="/resume.pdf" 
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