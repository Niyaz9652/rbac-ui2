import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import './footer.css'

// Footer Links Component
const FooterLinks = () => (
  <ul className="footer-links">
    <li>
      <a
        href="#privacy"
        className="footer-link"
      >
        Privacy Policy
      </a>
    </li>
    <li>
      <a
        href="#terms"
        className="footer-link"
      >
        Terms of Use
      </a>
    </li>
  </ul>
);

// Social Media Links Component
const SocialMediaLinks = () => (
  <div className="social-media-links">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-media-icon"
    >
      <FaFacebook />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-media-icon"
    >
      <FaTwitter />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-media-icon"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-media-icon"
    >
      <FaInstagram />
    </a>
  </div>
);

// Newsletter Subscription Component
const NewsletterSubscription = () => (
  <div className="flex items-center space-x-4">
    <input
      type="email"
      placeholder="Subscribe to our newsletter"
      className="newsletter-input"
    />
    <button className="newsletter-button">
      Subscribe
    </button>
  </div>
);

// Back to Top Button Component
const BackToTopButton = () => {
  useEffect(() => {
    const backToTopButton = document.querySelector(".back-to-top");

    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#top"
      className="back-to-top"
    >
      ↑ Back to Top
    </a>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-text">
        <p>&copy; 2024 Joyce Rey. All Rights Reserved.</p>
      </div>
      <FooterLinks />
      <SocialMediaLinks />
      <NewsletterSubscription />
      <BackToTopButton />
    </div>
  </footer>
);

export default Footer;
