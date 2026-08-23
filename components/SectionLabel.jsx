export default function SectionLabel({ label, className = "card-a card-top3" }) {
  return (
    <div className={className}>
      <div className="card-circle1" />
      <h2 className="card-subtitle">{label}</h2>
    </div>
  );
}
