import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Toggle burger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled || location.pathname !== "/" ? "scrolled" : ""}`}>
      <div className="header-content">
        {/* Logo and Branding */}
        <div className="header-left">
          <h1>JASHANJEET SINGH</h1>
          <p>Your vision, My code</p>
        </div>

        {/* Burger Menu */}
        <button className={`burger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>

        {/* Navigation Links */}
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/portfolio" className="nav-link">
            PORTFOLIO
          </Link>
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;