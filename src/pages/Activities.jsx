import { useEffect, useState } from "react";
import { AcitvitiesData } from "../data/ActivitiesData";
import { Link } from 'react-router';

export const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            return setActivities(ActivitiesData);
        }, 2000)
    }, []);

    return (
        <>
            <div>
                <h1>Activities</h1>
                <div>
                    {AcitvitiesData.map(act => {
                        return <>
                            <div key={act.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                                <img src={act.image} alt={act.title} className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                                        act.status === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {act.status}
                                    </span>
                                    <h2 className="text-xl font-bold mt-2">{act.title}</h2>
                                    <p className="text-sm text-gray-500 mb-3">{act.date}</p>
                                    <Link to={`/activities/${act.id}`} className="text-blue-600 font-medium hover:underline">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    );
    
};