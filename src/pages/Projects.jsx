import { useState } from 'react';
import SkillTag from "../components/SkillTag";
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import projects from "../data/projects"
import '../styles/projects.css';
import ProjectRole from "../components/ProjectRole";

const skills = [];
export default function Projects() {
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setHighlightedSkill(highlightedSkill === skill ? null : skill);

    if (skill) {
      const firstProject = projects.find((proj) => proj.skills.includes(skill));

      // Get the DOM elements
      const projectElement = firstProject
        ? document.getElementById(`project-${firstProject.skills[0]}`)
        : null;

      // Scroll to whichever element appears first in the DOM
      if (projectElement) {

        projectElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  // Update skills array to include all unique skills from both experiences and projects
  const allSkills = [
    ...new Set([
      ...skills,
      ...projects.flatMap((project) => project.skills)
    ]),
  ].sort();

  return (
    <div className="projects-container">

      <div className="projects-content">
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

{/* Maybe remove this section */}
        <div className="projects-header">
          <h2 className="projects-title">
            Recent Projects
          </h2>
          {/* <p className="projects-description">

          </p> */}
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


        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}