import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { DetailSkeleton } from '../components/Loading';

export const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/blog/${id}/bn`);
                const result = await response.json();
                setBlog(result['blog'] || null);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, []);

    if (loading) return <DetailSkeleton />;
    if (!blog) return <div className="text-center py-20 text-gray-500">Blog post not found.</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link to="/blogs" className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-1">
                &larr; Back to all stories
            </Link>
            <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{blog.title}</h1>
            <p className="text-gray-500 mb-8">{new Date(blog.created_at).toLocaleDateString()}</p>
            <div
                className="text-lg leading-relaxed text-gray-700 prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
}