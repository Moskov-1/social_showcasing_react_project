import { useEffect, useState } from 'react';
import BlogsData from '../data/BlogsData';
import { BlogCard } from '../components/BlogCard';
import { Link } from 'react-router';

export default function Blogs(){
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    'https://social-activity-admin.onrender.com/api/v1/blogs/bn'
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data['blogs'] || []);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }   
        fetchBlogs();
    }, []);

    console.log('Fetched blogs:', blogs);

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