import { useState } from 'react';
import SkillTag from "../components/SkillTag";
import ProjectCard from '../components/ProjectCard';
import projects from "../data/projects";
import '../styles/projects.css';

export default function Projects() {
  const [highlightedSkill, setHighlightedSkill] = useState([]);

  const handleSkillClick = (skill) => {
    const skillSelected = highlightedSkill.includes(skill)

    if (skillSelected){
      const filteredSkills = highlightedSkill.filter( currentSkill => currentSkill !== skill)
      setHighlightedSkill(filteredSkills)
    } else {
      setHighlightedSkill(prevSkills => [...prevSkills, skill])
    }
  };

  const allSkills = [
    ...new Set(projects.flatMap((project) => project.skills))
  ].sort();

  return (
    <div className="container projects-container">
      <div className="projects-content">
        <div className="skills-section">
          <div className="skills-container">
            {allSkills.map((skill) => (
              <SkillTag
                key={skill}
                name={skill}
                onClick={() => handleSkillClick(skill)}
                isHighlighted={highlightedSkill.includes(skill)}
              />
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h2 className="projects-title">{'/ Technical Projects'}</h2>
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