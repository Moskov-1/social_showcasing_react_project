import { useParams } from "react-router-dom"
import { ActivitiesData } from "../data/ActivitiesData";
import { Link } from 'react-router';

export const ActivityDetails = () => {
    const {id} = useParams();
    const activity = ActivitiesData.find( act => act.id === parseInt(id));
    if (!activity) return <div className="text-center py-20">activity post not found.</div>;

    return (
        <div>
            <Link to='/activities' className="text-blue-500 mb-4 inline-block">
                ← Go Back
            </Link>
            <img src={activity.image} className="w-full h-80 object-cover rounded-xl mb-6" alt="" />
            <h1 className="text-4xl font-bold mb-2">{activity.title}</h1>
            <p className="text-gray-500 mb-6">{activity.created_at} • <span className="font-bold">{activity.status}</span></p>
            <p className="text-lg leading-relaxed text-gray-700">{activity.short_text}</p>
        </div>
    );
}