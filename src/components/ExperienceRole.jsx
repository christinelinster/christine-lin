import '../styles/experience-role.css';

export default function ExperienceRole({ title, company, period }) {
  return (
    <div className="experience-role">
      <dt className="role-title">{title}</dt>
      <dd className="role-company">{company} ({period})</dd>
    </div>
  );
}
