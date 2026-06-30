import { useEffect, useState } from "react";
import { ActivitiesData } from "../data/ActivitiesData";
import { Link } from 'react-router';
import { ActivitiesCard } from "../components/ActivitiesCard";
import { GridSkeleton } from "../components/Loading";

export const Activities = () => {
    const [activities, setActivities] = useState({
        activities: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://social-activity-admin.onrender.com/api/v1/activities/bn");
                const result = await response.json();
                setActivities(result);
            } catch (error) {
                console.error('Error fetching activities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Activities</h1>
            <p className="text-gray-500 mb-8">Discover upcoming and past community events</p>
            {loading ? (
                <GridSkeleton count={6} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities['activities'].map(activity => (
                        <ActivitiesCard key={activity.id} activity={activity} />
                    ))}
                </div>
            )}
        </div>
    );
};