import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to RBAC Dashboard</h1>
        <p className="hero-description">
          Manage user roles and permissions effortlessly. Stay secure and efficient with our advanced Role-Based Access Control system.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
