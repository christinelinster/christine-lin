import SkillTag from './SkillTag';
import '../styles/experience-role.css';

export default function ExperienceRole({ title, company, period, description, skills, id, onSkillClick, highlightedSkill }) {
  return (
    <div id={id} className={`experience-role ${highlightedSkill && skills.includes(highlightedSkill) ? 'highlighted' : ''}`}>
      <dt className="role-title">{title}</dt>
      <dd className="role-company">{company} ({period})</dd>
      <dd className="role-description">{description}</dd>
      <div className="role-skills">
        {skills.map((skill) => (
          <SkillTag 
            key={skill} 
            name={skill} 
            onClick={() => onSkillClick(skill)}
            isHighlighted={skill === highlightedSkill}
          />
        ))}
      </div>
    </div>
  );
}
