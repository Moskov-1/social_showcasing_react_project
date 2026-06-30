import { useEffect, useState } from "react";
import { ActivitiesData } from "../data/ActivitiesData";
import { Link } from 'react-router';
import { ActivitiesCard } from "../components/ActivitiesCard";

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
                    {activities.map(activity => {
                        return <ActivitiesCard key={activity.id} activity={activity} />
                        
                    })}
                </div>
            </div>
        </>
    );
    
};