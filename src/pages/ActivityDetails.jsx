import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { DetailSkeleton } from '../components/Loading';

export const ActivityDetails = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/activity/${id}/bn`);
                const result = await response.json();
                setActivity(result['activity'] || []);
            } catch (error) {
                console.error('Error fetching activity:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchActivity();
    }, []);

    if (loading) return <DetailSkeleton />;
    if (!activity) return <div className="text-center py-20 text-gray-500">Activity not found.</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link to='/activities' className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-1">
                &larr; Back to Activities
            </Link>
            <img
                src={activity.image_url}
                alt={activity.title}
                className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{activity.title}</h1>
            <p className="text-gray-500 mb-8">
                {new Date(activity.created_at).toLocaleDateString()} &bull;{' '}
                <span className={`font-semibold ${activity.status ? 'text-green-600' : 'text-gray-400'}`}>
                    {activity.status ? 'Active' : 'Inactive'}
                </span>
            </p>
            <div
                className="text-lg leading-relaxed text-gray-700 prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: activity.content }}
            />
        </div>
    );
}