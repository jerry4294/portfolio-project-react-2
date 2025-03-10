import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroImage.css";

import image1 from "../assets/images/desklamp.png";
import image2 from "../assets/images/computerdeskman.jpg";
import image3 from "../assets/images/clutereddesk.jpg";

const images = [image1, image2, image3];

const HeroImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? "100%" : "-100%", // Vertical slide for mobile
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 1.2 }, // Slower transition
        opacity: { duration: 1.2 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? "100%" : "-100%", // Vertical slide for mobile
      opacity: 0,
      transition: {
        y: { duration: 1.2 }, // Slower transition
        opacity: { duration: 1.2 },
      },
    }),
  };

  return (
    <div className="hero-section">
      {/* Image Carousel (Full Screen on Mobile) */}
      <div className="hero-image">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Hero"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 100, damping: 20 }, // Softer spring
              opacity: { duration: 1.2 },
            }}
          />
        </AnimatePresence>
      </div>

      {/* Text Overlay (Centered on Mobile) */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Creating immersive web experiences with a perfect balance of design and functionality.</h1>
          <button className="portfolio-button" onClick={() => window.location.href = '/portfolio'}>Portfolio</button>

        </div>
      </div>
    </div>
  );
};

export default HeroImage;

