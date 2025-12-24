import '../styles/skill-tag.css';

export default function SkillTag({ name, onClick, isHighlighted, readonly=false }) {
  return (
    <span
      className={`skill-tag ${isHighlighted ? 'highlighted' : ''} ${readonly ? 'readonly' : 'interactive'}`}
      onClick={readonly ? undefined : onClick}
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
