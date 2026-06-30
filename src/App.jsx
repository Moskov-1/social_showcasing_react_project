import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects'; 
import { Activities } from './pages/Activities'; 
import { BlogDetails } from './pages/BlogDetails';
import { ActivityDetails } from './pages/ActivityDetails';
import Blogs from './pages/Blogs';
import { Gallery } from './pages/Gallery';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
function App() {

  return (
    <>
    <nav className="max-w-6xl mx-auto px-4 py-12">
        <ul className="flex space-x-4 mb-8">
          <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-blue-500 hover:underline">About</Link></li>
          <li><Link to="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
          <li><Link to="/activities" className="text-blue-500 hover:underline">Activities</Link></li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<ActivityDetails />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path={'/gallery/:gallery_id'} element={<Gallery/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App
