import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects'; 
import { Activities } from './pages/Activities'; 
import { BlogDetails } from './pages/BlogDetails';
import { ActivityDetails } from './pages/ActivityDetails';
import Blogs from './pages/Blogs';
import { Gallery } from './pages/Gallery';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<ActivityDetails />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path={'/gallery:gallery_id'} element={}></Route>
    </Routes>
  );
}

export default App
