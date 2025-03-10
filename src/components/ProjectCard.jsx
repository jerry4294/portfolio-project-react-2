import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, isAlternate, onViewDetails }) => {
  const displayedTechnologies = project.technologies.slice(0, 3); // Show only 3 technologies
  const additionalTechnologiesCount = project.technologies.length - 3; // Calculate additional technologies

  return (
    <div className={`project-card ${isAlternate ? 'alternate' : ''}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <button className="view-details" onClick={onViewDetails}>
            View Details
          </button>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="live-project"
          >
            See Live Project
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {displayedTechnologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
          {additionalTechnologiesCount > 0 && (
            <span className="additional-technologies">
              +{additionalTechnologiesCount} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;