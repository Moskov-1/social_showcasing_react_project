import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DetailSkeleton } from '../components/Loading';

export function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/project/${id}/bn`);
                const result = await response.json();
                setProject(result['project'] || []);
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, []);

    if (loading) return <DetailSkeleton />;
    if (!project) return <div className="text-center py-20 text-gray-500">Project post not found.</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link to='/projects' className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-1">
                &larr; Back to Projects
            </Link>
            <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{project.title}</h1>
            <p className="text-gray-500 mb-8">
                {new Date(project.created_at).toLocaleDateString()} &bull;{' '}
                <span className={`font-semibold ${project.status ? 'text-green-600' : 'text-gray-400'}`}>
                    {project.status ? 'Active' : 'Inactive'}
                </span>
            </p>
            <div
                className="text-lg leading-relaxed text-gray-700 prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: project.content }}
            />
        </div>
    );
}