import React from 'react';
import { FaGithub } from 'react-icons/fa'; // ייבוא של האייקון
// import 'src/styles/projectCard.css';

interface ProjectCardProps {
  project: {
    Name: string;
    LastCommit: Date | null;
    Stars: number;
    PullRequests: number;
    Url: string;
    Languages: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.Name}</h3>
      <p>Last Commit: {project.LastCommit?.getDate()}</p>
      <p>Stars: {project.Stars}</p>
      <p>Pull Requests: {project.PullRequests}</p>
      <p>Languages: {project.Languages.join(', ')}</p>
      <a href={project.Url} target="_blank" rel="noopener noreferrer" className="github-link">
        <FaGithub size={24} /> GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
