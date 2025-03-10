import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import '../assets/styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Links */}
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
          <Link to="/about" className="footer-link">About</Link>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jashanjeetsingh21/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:Jashanjeetsingh0021@gmail.com"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="copyright">
          &copy; {new Date().getFullYear()} Jashanjeet Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;