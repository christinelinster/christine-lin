import '../styles/interest-card.css';

export default function InterestCard({ Icon, name }) {
  return (
    <div className="interest-card">
      <Icon className="interest-icon" />
      <span className="interest-name">{name}</span>
    </div>
  );
}
