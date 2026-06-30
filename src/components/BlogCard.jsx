import {Link} from "react-router-dom";

export function BlogCard({ blog }) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <img src={blog.image_url} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            {/* <p className="text-gray-600 mb-4">{blog.text}</p> */}
            <Link to={`/blogs/${blog.id}`} className="text-blue-600 font-semibold">Read More →</Link>
            </div>
        </div>
    ) ;
}

