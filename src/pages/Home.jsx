import {StatCard} from '../components/StatCard';
import {StatsData} from '../data/StatsData';
const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Our Impact at a Glance</h2>
      
      {/* This grid layout makes the 4 cards sit side-by-side on desktop */}
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
};

export default Home;