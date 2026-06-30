import { useEffect, useState } from 'react';
import BlogsData from '../data/BlogsData';
import { BlogCard } from '../components/BlogCard';
import { Link } from 'react-router';

export default function Blogs(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setBlogs(BlogsData);
        }, 1000);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
        </div>
    );
}