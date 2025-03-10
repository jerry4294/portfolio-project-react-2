import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import CertificationCarousel from '../components/CertificationCarousel';
import './About.css';

// Import local image
import yourImage from '../assets/images/profilepic.jpg';
import resumePdf from '../assets/images/jashanjeet-singh.pdf'; // Import your resume PDF

const About = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResumeOverlay, setShowResumeOverlay] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Function to scroll to the skills section
  const scrollToSkills = () => {
    setShowAllSkills(true); // Show all skills
    document.getElementById('skills-section').scrollIntoView({ behavior: 'smooth' });
  };

  // Function to collapse the skills section
  const collapseSkills = () => {
    setShowAllSkills(false);
  };

  // Function to toggle the contact form
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  // Function to toggle the resume overlay
  const toggleResumeOverlay = () => {
    setShowResumeOverlay(!showResumeOverlay);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS credentials
    const serviceID = 'service_4f02zv4'; // Replace with your Service ID
    const templateID = 'template_p6t9typ'; // Replace with your Template ID
    const userID = 'KBO0IbXKrQ08su9gt'; // Replace with your User ID

    // Send the email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        alert('Message sent successfully!');
        setShowContactForm(false); // Close the contact form
      }, (error) => {
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="about">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Crafting Digital Experiences with Passion</p>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Jashanjeet Singh</h2>
            <p className="intro-text">
              Hi, I'm a passionate developer with a focus on creating
              beautiful and functional web experiences. I specialize in React,
              JavaScript, and modern web technologies. With a strong background in
              UI/UX design, I strive to deliver user-friendly and visually
              appealing solutions.
            </p>
            <div id="skills-section" className="skills-section">
              <h3>Core Skills</h3>
              <div className={`skills-grid ${showAllSkills ? 'expanded' : ''}`}>
                <div className="skill-card">React</div>
                <div className="skill-card">JavaScript</div>
                <div className="skill-card">UI/UX Design</div>
                <div className="skill-card">Node.js</div>
                <div className="skill-card">Responsive Design</div>
                <div className="skill-card">Web Performance</div>
                {/* Add more skills here */}
                {showAllSkills && (
                  <>
                    <div className="skill-card">HTML</div>
                    <div className="skill-card">CSS</div>
                    <div className="skill-card">TypeScript</div>
                    <div className="skill-card">Firebase</div>
                    <div className="skill-card">MongoDB</div>
                    <div className="skill-card">Git</div>
                  </>
                )}
              </div>
              {!showAllSkills ? (
                <button className="show-more-skills" onClick={scrollToSkills}>
                  Show More Skills
                </button>
              ) : (
                <button className="show-less-skills" onClick={collapseSkills}>
                  Show Less Skills
                </button>
              )}
            </div>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={scrollToSkills}>
                Skills
              </button>
              <button className="primary-cta" onClick={toggleContactForm}>
                Contact
              </button>
              <button className="primary-cta" onClick={toggleResumeOverlay}>
                View Resume
              </button>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src={yourImage} alt="Jashanjeet Singh" />
              <div className="image-frame"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Overlay */}
      {showContactForm && (
        <div className="contact-overlay">
          <div className="contact-form">
            <h3>Contact Me</h3>
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <p>Or connect with me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
            <button className="close-button" onClick={toggleContactForm}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Resume Overlay */}
      {showResumeOverlay && (
        <div className="resume-overlay">
          <div className="resume-container">
            <iframe src={resumePdf} title="Resume" width="100%" height="100%"></iframe>
            <button className="close-button" onClick={toggleResumeOverlay}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Certification Carousel Section */}
      <div className="certifications-section">
        <div className="section-header">
          <h2>Certifications & Achievements</h2>
          <p className="section-subtitle">
            My professional credentials and notable accomplishments
          </p>
        </div>
        <CertificationCarousel />
        <div className="carousel-controls">
          <button className="carousel-prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="additional-info">
        <div className="info-card">
          <i className="fas fa-code"></i>
          <h3>3+ Years Experience</h3>
          <p>Building and Designing modern web applications</p>
        </div>
        <div className="info-card">
          <i className="fas fa-project-diagram"></i>
          <h3>20+ Projects</h3>
          <p>Completed successfully</p>
        </div>
        <div className="info-card">
          <i className="fas fa-users"></i>
          <h3>Client Satisfaction</h3>
          <p>98% positive feedback</p>
        </div>
      </div>
    </div>
  );
};

export default About;