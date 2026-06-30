import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard'
import { useState, useEffect } from 'react';
import { GridSkeleton } from '../components/Loading';

export function Projects() {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/projects/bn`);
                const data = await response.json();
                setProjectsData(data?.projects || []);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-gray-500 mb-8">Explore our community projects and initiatives</p>
            {loading ? (
                <GridSkeleton count={6} />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map(item => (
                        <ProjectCard key={item.id} project={item} />
                    ))}
                </div>
            )}
        </div>
    );
}