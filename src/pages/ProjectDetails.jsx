import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetails() {
    const {id} = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/project/${id}/bn`);
                const result = await response.json();
                setProject(result['project'] || []);
            }
            catch (error) {
                console.error('Error fetching project:', error);
            }
        };
        fetchProject();
    }, []);

    if (!project) return <div className="text-center py-20">Project post not found.</div>;

    console.log('Project:', project);

    return (
        <div>
            <Link to='/projects' className="text-blue-500 mb-4 inline-block">
                ← Go Back
            </Link>
            <img src={project.image_url} className="w-full h-80 object-cover rounded-xl mb-6" alt="" />
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-500 mb-6">{new Date(project.created_at).toLocaleDateString()} • <span className="font-bold">{project.status ? 'Active' : 'Inactive'}</span></p>
            <p className="text-lg leading-relaxed text-gray-700">{project.content}</p>
        </div>
    );
}

export {ProjectDetails};