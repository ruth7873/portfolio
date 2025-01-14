import React from 'react';
import { FaGithub } from 'react-icons/fa'; // ייבוא של האייקון
import { RepositoryInfo } from '../types/RepositoryInfo';


const ProjectCard: React.FC<{ project: RepositoryInfo }> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.Name}</h3>
      <p>Last Commit: {project.LastCommit?.toLocaleString()}</p>
      <p>Stars: {project.Stars}</p>
      <p>Pull Requests: {project.PullRequests}</p>
      <div className="project-links">
      <a href={project.Url} target="_blank" rel="noopener noreferrer" className="github-link">
        <FaGithub size={24} /> GitHub
      </a>
      <br></br>
      {project.LiveDemoUrl && (
      <a href={project.LiveDemoUrl} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    )}
        
      </div>
    </div>
  );
};

export default ProjectCard;
