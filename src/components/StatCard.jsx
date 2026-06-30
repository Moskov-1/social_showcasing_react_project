export const StatCard = ({ label, value }) => (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{label}</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
);