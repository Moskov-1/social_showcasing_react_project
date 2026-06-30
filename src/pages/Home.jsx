import { Slide } from '../components/Slide';
import { SlidesData } from '../data/SlidesData';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { BlogCard } from '../components/BlogCard';
import { LoadingSpinner } from '../components/Loading';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://social-activity-admin.onrender.com/api/v1/index/bn');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (SlidesData.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SlidesData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="relative w-full h-[500px] overflow-hidden bg-blue-500">
        {data?.slides?.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Slide {...slide} />
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {data?.slides?.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {data?.featured_projects?.length > 0 && (
          <section className="py-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
              <Link to="/projects" className="text-blue-600 font-semibold hover:underline text-sm">
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.featured_projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {data?.blogs?.length > 0 && (
          <section className="pb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Blogs</h2>
              <Link to="/blogs" className="text-blue-600 font-semibold hover:underline text-sm">
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Home;