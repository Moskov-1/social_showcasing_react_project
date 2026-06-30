import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import { Projects } from './pages/Projects'; 
import { Activities } from './pages/Activities'; 
import { BlogDetails } from './pages/BlogDetails';
import { ActivityDetails } from './pages/ActivityDetails';
import Blogs from './pages/Blogs';
import { Gallery } from './pages/Gallery';
import MemberRequest from './pages/MemberRequest';
import { ProjectDetails } from './pages/ProjectDetails';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/member-request" element={<MemberRequest />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App
