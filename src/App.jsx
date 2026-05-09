import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { BlogDetails } from './pages/BlogDetails';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
    </Routes>
  );
}

export default App
