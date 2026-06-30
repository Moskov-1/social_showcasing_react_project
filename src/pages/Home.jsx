
import {Slide} from '../components/Slide';
import {SlidesData} from '../data/SlidesData';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {projectsData} from '../data/ProjectsData';
import ProjectCard from '../components/ProjectCard';
import { Footer } from '../components/Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState(null);
  const projects = projectsData.slice(0, 3); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://social-activity-admin.onrender.com/api/v1/index/bn');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  console.log('Fetched data:', data);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      <div className="bg-blue-500 text-white p-8 rounded-lg mb-12 carousel relative overflow-hidden h-64">
        
        {data?.slides?.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-500 p-8 ${
              index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <Slide {...slide} />
          </div>
        ))}
        
      </div>


      <h2 className="text-2xl font-bold mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.featured_projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
}
export default Home;
            