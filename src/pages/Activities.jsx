import { useEffect, useState } from "react";
import { ActivitiesData } from "../data/ActivitiesData";
import { Link } from 'react-router';
import { ActivitiesCard } from "../components/ActivitiesCard";

export const Activities = () => {
    const [activities, setActivities] = useState({
        activities: []
    });

    useEffect(() => {
        const fetchActivities = async () => {
            try{
                const response = await fetch("https://social-activity-admin.onrender.com/api/v1/activities/bn");
                const result = await response.json();
                setActivities(result);
            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };
        
        fetchActivities();
    }, []);

    return (
        <>
            <div>
                <h1>Activities</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {activities['activities'].map(activity => (
                        <ActivitiesCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </div>
        </>
    );
    
};