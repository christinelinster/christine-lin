import { useState } from 'react';
import SkillTag from "../components/SkillTag";
import ProjectCard from '../components/ProjectCard';
import projects from "../data/projects";
import '../styles/projects.css';

export default function Projects() {
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setHighlightedSkill(highlightedSkill === skill ? null : skill);
  };

  const allSkills = [
    ...new Set(projects.flatMap((project) => project.skills))
  ].sort();

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="section">
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
          <h2 className="projects-title">{'[ Featured Projects ]'}</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onSkillClick={handleSkillClick}
                highlightedSkill={highlightedSkill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}