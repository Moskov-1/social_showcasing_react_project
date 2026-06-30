import {StatCard} from '../components/StatCard';
import {StatsData} from '../data/StatsData';
import {Slide} from '../components/Slide';
import {SlidesData} from '../data/SlidesData';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {projectsData} from '../data/ProjectsData';
import ProjectCard from '../components/ProjectCard';
import { Footer } from '../components/Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = projectsData.slice(0, 3); 

  useEffect(() => {
    if (SlidesData.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SlidesData.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav>
        <ul className="flex space-x-4 mb-8">
          <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-blue-500 hover:underline">About</Link></li>
          <li><Link to="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
          <li><Link to="/activities" className="text-blue-500 hover:underline">Activities</Link></li>
        </ul>
      </nav>
      <div className="bg-blue-500 text-white p-8 rounded-lg mb-12 carousel relative overflow-hidden h-64">
        
        {SlidesData.map((slide, index) => (
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

      <h2 className="text-2xl font-bold mb-8">Our Impact at a Glance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {StatsData.map((stat) => (
          <StatCard 
            key={stat.id} 
            label={stat.label} 
            value={stat.value} 
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Home;
            