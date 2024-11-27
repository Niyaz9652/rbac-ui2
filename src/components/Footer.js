import React, { useState } from 'react';
import './Footer.css';  // Import the CSS file
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa'; // Social media and back to top icons

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Newsletter subscribed with email: ${email}`);
    setEmail('');
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          &copy; {new Date().getFullYear()} RBAC Dashboard. All Rights Reserved.
        </div>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div className="newsletter">
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input 
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="Enter your email" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
        <button onClick={handleBackToTop} className="back-to-top">
          <FaArrowUp className="back-to-top-icon" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
