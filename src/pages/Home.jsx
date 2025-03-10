import React, { useState, useEffect, useRef } from "react";
import HeroImage from "../components/HeroImage";
import "./Home.css";

const Home = () => {
  const [animationIntensity, setAnimationIntensity] = useState(0.5);
  const sectionRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Scroll intensity controller
  useEffect(() => {
    const handleScroll = () => {
      const intensity = Math.min(window.scrollY / 1000, 1);
      setAnimationIntensity(intensity);
      document.documentElement.style.setProperty(
        "--animation-intensity",
        intensity
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home" style={{ "--animation-intensity": animationIntensity }}>
      {/* Hero Section */}
      <HeroImage />

      {/* Content Section 1: About Me */}
      <div
        className="content-section"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="content-left">
          <img
            src={require("../assets/images/aboutme1.png")}
            alt="Workspace"
            className="content-image"
          />
        </div>
        <div className="content-right">
          <h2>My Approach to Web Development</h2>
          <p>
          I focus on creating exceptional digital experiences that blend design and functionality with user needs at the core. Each project starts with a deep understanding of the audience, ensuring that every detail enhances engagement and usability. I prioritize clean, maintainable code and responsive design, ensuring seamless performance across all devices. I collaborate closely with clients to transform their ideas into innovative, high-quality solutions, while staying ahead of emerging technologies and trends.
          </p>
          <button className="cta-button" onClick={() => window.location.href = '/portfolio'}>Learn More</button>
        </div>
      </div>

      {/* Content Section 2: My Skills */}
      <div
        className="content-section"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="content-left">
          <img
            src={require("../assets/images/skills1.png")}
            alt="Skills"
            className="content-image"
          />
        </div>
        <div className="content-right">
          <h2>Key Strengths</h2>
          <p>
          With a deep understanding of front-end development and a passion for clean, responsive design, I build websites that are both visually appealing and highly functional. I specialize in crafting seamless user experiences by combining modern technologies with creative design, ensuring every project stands out and delivers lasting impact.
          </p>
          <button className="cta-button" onClick={() => window.location.href = '/about'}>View Skills</button>
        </div>
      </div>

      {/* Skills Grid Section */}
      <div className="skills-grid-section">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Building modern, responsive, and scalable web applications.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually appealing user interfaces.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Ensuring seamless experiences across all devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;