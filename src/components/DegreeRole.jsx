import SkillTag from './SkillTag';
import '../styles/experience-role.css';

export default function DegreeRole({ title, company, overview, skills}) {
  return (
    <div className="experience-role">
      <dt className="role-title">{title}</dt>
      <dd className="role-company">{company}</dd>
      <dd className="role-overview">{overview}</dd>
      <div className="role-skills">
        {skills.map((skill) => (
          <SkillTag
            key={skill}
            name={skill}
          />
        ))}
      </div>
    </div>
  );
}
