import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <img src={project.image_url} alt={project.title} />
      <p>{project.category}</p>
      <Link to={`/project/${project.id}`} target="_blank" rel="noopener noreferrer">
        View Project
      </Link>
    </div>
  );
}