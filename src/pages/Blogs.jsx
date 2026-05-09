import { useEffect, useState } from 'react';
import BlogsData from '../data/BlogsData';
import { Link } from 'react-router';
export default function Blogs(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setBlogs(BLOGS);
        }, 1000);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.text}</p>
                <Link to={`/blogs/${blog.id}`} className="text-blue-600 font-semibold">Read More →</Link>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}