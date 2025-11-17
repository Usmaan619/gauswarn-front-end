export default function DiscoverStatsCard({ number, label }) {
  return (
    <div className="discover-stats-card">
      <div className="discover-stats-number">{number}</div>
      <div className="discover-stats-label">{label}</div>
    </div>
  );
}
