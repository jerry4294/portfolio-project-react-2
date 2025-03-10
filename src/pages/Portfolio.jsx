import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null); // Track selected project for details

  const projects = [
    {
      id: 1,
      title: 'Fitlife Fitness WebApp',
      image: require('../assets/images/Fitlife.png'),
      description: 'Fitlife is a website that offers workout programs, designed with a focus on user experience using Vanilla HTML, CSS, JavaScript, and custom UI/UX elements created with Adobe Illustrator.',
      detailedDescription: 'Fitlife is a fitness-focused website that sells customized workout programs tailored to different fitness goals. Built using Vanilla HTML, CSS, and JavaScript, it provides an interactive user experience with features like exercise guides, progress tracking, and engaging animations. The UI/UX design ensures easy navigation, while Adobe Illustrator is used for high-quality graphics and branding elements.',
      technologies: ['Vanilla HTML', 'HTML', 'Javascript', 'CSS', 'UI/UX', 'Adobe Illustrator'],
      liveLink: 'https://jerry4294.github.io/Fitlife-group/', // Add live project link
    },
    {
      id: 2,
      title: 'RoseTrails Travel Agency',
      image: require('../assets/images/rosetrails.png'),
      description: 'RoseTrails Travel Agency is a website that offers travel packages, built with Vanilla HTML, CSS, JavaScript, and enhanced with custom UI/UX design and Adobe Illustrator graphics.',
      detailedDescription: 'RoseTrails Travel Agency is a travel booking website that offers curated travel packages to various destinations. Developed with Vanilla HTML, CSS, and JavaScript, it features interactive travel guides, package filtering, and a user-friendly booking process. The UI/UX design enhances the browsing experience, while Adobe Illustrator is used for visually appealing elements, including custom icons and banners.',
      technologies: ['Vanilla HTML', 'HTML', 'Javascript', 'CSS', 'UI/UX', 'Adobe Illustrator'],
      liveLink: 'https://jerry4294.github.io/Travel-Rosetrails/', // Add live project link
    },
    {
      id: 3,
      title: 'Medical Reach Inc.',
      image: require('../assets/images/medicalreach.png'),
      description: 'Medical Reach is a web-based application with the goal to solve the problem of finding and inquiring about a new family doctor. The ease and use of our application provide the user with an exceptionally easy and rewarding experience.',
      detailedDescription: 'Medical Reach is a web-based application designed to help users find and inquire about new family doctors. The platform offers a user-friendly experience with features like doctor search, appointment booking, and patient reviews. Built with React, Node.js, and MongoDB, it ensures secure data handling and seamless performance. The UI/UX design focuses on simplicity and accessibility, enhancing the overall user experience.',
      technologies: ['Figma', 'UI/UX', 'Adobe Illustrator'],
      liveLink: 'https://www.figma.com/proto/Bf0VjNZqESwBPfGUoMoKME/Medical-Reach-Mockups?node-id=1-688&p=f&t=F9RVJuoF3Q0J27HI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // Add live project link
    },
    // Add more projects as needed

  ];

  const filters = ['All', 'React', 'Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Vanilla HTML', 'Javascript'];

  // Function to handle filter button clicks
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    if (filter === 'All') {
      // Scroll to the top of the project list
      document.getElementById('project-list').scrollIntoView({ behavior: 'smooth' });
    } else {
      // Find the first project with the selected technology and scroll to it
      const projectElement = document.getElementById(`project-${filter}`);
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Function to handle "View Details" click
  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  // Function to close the details view
  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Showcasing my best work and projects</p>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div id="project-list" className="project-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={`project-${project.technologies[0]}`} // Assign ID based on the first technology
          >
            <ProjectCard
              project={project}
              isAlternate={index % 2 !== 0}
              onViewDetails={() => handleViewDetails(project)}
            />
          </div>
        ))}
      </div>

      {/* Project Details Overlay */}
      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details">
            <h2>{selectedProject.title}</h2>
            <p className="detailed-description">{selectedProject.detailedDescription}</p>
            <div className="technologies-list">
              <h3>Technologies Used:</h3>
              <ul>
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-project-link"
            >
              See Live Project
            </a>
            <button className="close-details" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;