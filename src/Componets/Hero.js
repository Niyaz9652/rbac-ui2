import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted className="hero-video">
        <source
          src="../Images/coverr-villa-with-a-swimming-pool-6618-1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay">
        {/* Title Section */}
        <div className="hero-title-section">
          <h1 className="hero-title">Global Luxury</h1>
          <p className="hero-subtitle">Over $6 Billion in Real Estate Sales</p>
        </div>

        {/* Buttons Section */}
        <div className="hero-buttons">
          <Link to="/properties" className="hero-button">
            View Properties
          </Link>
          <Link to="/contact" className="hero-button-secondary">
            Contact Us
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
