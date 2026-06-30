import { Link } from 'react-router-dom';

export function BlogCard({ blog }) {
    return (
        <Link
            to={`/blogs/${blog.id}`}
            className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative overflow-hidden h-56">
                <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.created_at}</p>
                <span className="text-blue-600 font-semibold group-hover:underline">
                    Read More &rarr;
                </span>
            </div>
        </Link>
    );
}