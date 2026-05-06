export const StatCard = ({ label, value }) => (
  <div className="stat-card">
    <h3 className="stat-label">{label}</h3>
    <p className="stat-value">{value}</p>
  </div>
);