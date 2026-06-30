import { useParams } from "react-router-dom"
import { ActivitiesData } from "../data/ActivitiesData";
import { Link } from 'react-router';
import { useEffect, useState } from "react";

export const ActivityDetails = () => {
    const {id} = useParams();
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/activity/${id}/bn`);
                const result = await response.json();
                setActivity(result);
            }
            catch (error) {
                console.error('Error fetching activity:', error);
            }
        };
        fetchActivity();
    }, []);

    if (!activity) return <div className="text-center py-20">activity post not found.</div>;

    return (
        <div>
            <Link to='/activities' className="text-blue-500 mb-4 inline-block">
                ← Go Back
            </Link>
            <img src={activity.image_url} className="w-full h-80 object-cover rounded-xl mb-6" alt="" />
            <h1 className="text-4xl font-bold mb-2">{activity.title}</h1>
            <p className="text-gray-500 mb-6">{new Date(activity.created_at).toLocaleDateString()} • <span className="font-bold">{activity.status ? 'Active' : 'Inactive'}</span></p>
            <p className="text-lg leading-relaxed text-gray-700">{activity.content}</p>
        </div>
    );
}