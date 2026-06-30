import {Link} from 'react-router-dom';

export function ActivitiesCard({ activity }) {
  return (
    <div key={activity.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
        <img src={activity.icon_url} alt={activity.title} className="w-full h-48 object-cover" />
        <div className="p-5">
            <span className={`text-xs font-bold px-2 py-1 rounded ${
                activity.status === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
            }`}>
                {activity.status ? "Live" : "Inactive"}
            </span>
            <h2 className="text-xl font-bold mt-2">{activity.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{activity.created_at}</p>
            <Link to={`/activities/${activity.id}`} className="text-blue-600 font-medium hover:underline">
                View Details
            </Link>
        </div>
    </div>
  );
}