import { Link } from 'react-router-dom';

export function ActivitiesCard({ activity }) {
    return (
        <Link
            to={`/activities/${activity.id}`}
            className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative overflow-hidden h-48">
                <img
                    src={activity.image_url}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-5">
                <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                        activity.status
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    {activity.status ? 'Live' : 'Inactive'}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{activity.created_at}</p>
                <span className="inline-block mt-3 text-blue-600 font-semibold text-sm group-hover:underline">
                    View Details &rarr;
                </span>
            </div>
        </Link>
    );
}