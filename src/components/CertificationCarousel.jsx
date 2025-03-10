import React, { useState, useEffect } from 'react';
import './CertificationCarousel.css';
import '../assets/styles/global.css';

// Import your certification images
import cert1 from '../assets/images/certdevops.png';
import cert2 from '../assets/images/react-web-workers.png';
import cert3 from '../assets/images/advancednodejs.png';

const CertificationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const certifications = [
    {
      id: 1,
      image: cert1,
      title: 'Introduction to DevOps',
      description: 'Learned core DevOps principles, including continuous integration, continuous delivery, automation, and collaboration between development and IT operations. Gained hands-on experience in optimizing workflows, improving deployment efficiency, and enhancing software reliability through fast experimentation and iterative development.',
      date: 'July 2024',
      issuer: 'Alison'
    },
    {
      id: 2,
      image: cert2,
      title: 'React: Web Workers',
      description: 'Mastered the use of Web Workers in React applications to improve performance and responsiveness. Learned how to create and manage Web Workers, communicate with the main thread, and optimize the user experience by offloading heavy computations to separate threads.',
      date: 'March 2025',
      issuer: 'LinkedIn Learning'
    },
    {
      id: 3,
      image: cert3,
      title: 'Advanced Node.js',
      description: 'Explored advanced Node.js concepts, including asynchronous programming, streams, child processes, and clustering. Learned how to build scalable, high-performance applications using Node.js, optimize server performance, and handle complex I/O operations efficiently.',
      date: 'March 2025',
      issuer: 'Linkedin Learning'
    },
  ];

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
    setShowDetails(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
    setShowDetails(false);
  };

  const handleViewDetails = () => {
    setCurrentCert(certifications[currentIndex]);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="carousel-container">
      {/* Carousel Wrapper */}
      <div className="carousel-wrapper">
        {/* Previous Button */}
        <button className="carousel-control prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Carousel Track */}
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="carousel-slide"
              style={{ width: '100%' }}
            >
              <div className="certification-card">
                <img src={cert.image} alt={cert.title} />
                <div className="certification-overlay">
                  <h3>{cert.title}</h3>
                  <button className="view-button" onClick={handleViewDetails}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button className="carousel-control next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Certificate Details Modal */}
      {showDetails && currentCert && (
        <div className="certificate-details-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeDetails}>
              &times;
            </button>
            <h2>{currentCert.title}</h2>
            <div className="modal-body">
              <img src={currentCert.image} alt={currentCert.title} />
              <div className="details-content">
                <p><strong>Issuer:</strong> {currentCert.issuer}</p>
                <p><strong>Date:</strong> {currentCert.date}</p>
                <p>{currentCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination Dots */}
      <div className="carousel-pagination">
        {certifications.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setShowDetails(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCarousel;