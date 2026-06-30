import BlogData from "../data/BlogsData";
import { Link } from 'react-router';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
 

export const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    
    useEffect(() => {

        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/blog/${id}/bn`);
                const result = await response.json();
                setBlog(result['blog'] || null);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        }
        fetchBlog();
    }, []);
    
    console.log(blog);

    if (!blog) return <div className="text-center py-20">Blog post not found.</div>;
    
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blogs" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to all stories
        </Link>
        
        <img src={blog.image_url} alt={blog.title} className="w-full h-96 object-cover rounded-xl mb-8" />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-8">{new Date(blog.created_at).toLocaleDateString()}</p>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {/* For now, we just display the text. In a real app, this could be long content. */}
            <p className="mt-4">
                {blog.content}
            </p>
        </div>
        </div>
    );
}