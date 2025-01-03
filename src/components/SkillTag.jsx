import '../styles/skill-tag.css';

export default function SkillTag({ name, onClick, isHighlighted }) {
  return (
    <span 
      className={`skill-tag ${isHighlighted ? 'highlighted' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {name}
    </span>
  );
}
