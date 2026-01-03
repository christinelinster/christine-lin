import SkillTag from './SkillTag';
import '../styles/experience-role.css';

export default function ExperienceRole({ title, company, period, overview, website, description = [], skills = [], links = [] }) {
  return (
    <div className="experience-role">
      <dt className="role-title">{title}</dt>
      {website
        ? <a className='role-company' href={website}>{company} {period && `(${period})`} <span className="link-arrow">↗</span></a>
        : <dd className="role-company">{company} {period && `(${period})`}</dd>
      }


      {overview && <dd className="role-overview">{overview}</dd>}
      {description.length > 0 && (
        <dd className="role-description">
          <ul>
            {description.map((point, index) =>
              <li key={`${company}-${index}`}>{point}</li>
            )}
          </ul>
        </dd>
      )}

      {links.length > 0 && (
        <dd className="role-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="artifact-link"
            >
              {link.label}
              <span className="link-arrow">↗</span>
            </a>
          ))}
        </dd>
      )}
      <div className="role-skills">
        {skills.map((skill) => (
          <SkillTag
            key={skill}
            name={skill}
            readonly={true}
          />
        ))}
      </div>
    </div>
  );
}
