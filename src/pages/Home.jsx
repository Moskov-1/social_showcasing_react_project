import {StatCard} from '../components/StatCard';
import {StatsData} from '../data/StatsData';
import {Slide} from '../components/Slide';
import {SlidesData} from '../data/SlidesData';
import { useState, useEffect } from 'react';

// Assuming SlidesData and StatsData are imported or passed as props

function Home() {
  // 1. State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Effect to auto-advance the carousel every 3 seconds
  useEffect(() => {
    if (SlidesData.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SlidesData.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 3. Added relative and overflow-hidden to contain the slides */}
      <div className="bg-blue-500 text-white p-8 rounded-lg mb-12 carousel relative overflow-hidden h-64">
        
        {SlidesData.map((slide, index) => (
          /* 4. Only show the slide if its index matches currentSlide state */
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
      
      {/* Grid layout untouched */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {StatsData.map((stat) => (
          <StatCard 
            key={stat.id} 
            label={stat.label} 
            value={stat.value} 
          />
        ))}
      </div>
    </div>
  );
}
export default Home;