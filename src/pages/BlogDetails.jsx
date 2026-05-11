import BlogData from "../data/BlogsData";
import { Link } from 'react-router';
import { useParams } from "react-router-dom"

 

export const BlogDetails = () => {
    const { id } = useParams();
    const blog = BlogData.find(b => b.id === parseInt(id));
    
    if (!blog) return <div className="text-center py-20">Blog post not found.</div>;
    
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blogs" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to all stories
        </Link>
        
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-xl mb-8" />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {/* For now, we just display the text. In a real app, this could be long content. */}
            <p>{blog.text}</p>
            <p className="mt-4">
            This is where the full story of the NGO's impact would go. 
            You can add more fields to your blogData.js to include date, author, 
            and multiple paragraphs!
            </p>
        </div>
        </div>
    );
}