import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"; // Import Tailwind CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-xl italic">Joyce</h1>
        </div>

        {/* Desktop Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <Link
              to="/resume"
              className={isActive("/resume") ? "active" : ""}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link to="/team" className={isActive("/team") ? "active" : ""}>
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/communities"
              className={isActive("/communities") ? "active" : ""}
            >
              Communities
            </Link>
          </li>
          <li
            className="navbar-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="/properties"
              className={isActive("/properties") ? "active" : ""}
              onClick={(e) => e.preventDefault()}
            >
              Properties
            </Link>
            <ul
              className={`dropdown-menu ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/properties/current-listings">Current Listings</Link>
              </li>
              <li>
                <Link to="/properties/recent-sales">Recent Sales</Link>
              </li>
              <li>
                <Link to="/properties/home-search">Home Search</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/press" className={isActive("/press") ? "active" : ""}>
              Press
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className={isActive("/testimonials") ? "active" : ""}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-toggle"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 