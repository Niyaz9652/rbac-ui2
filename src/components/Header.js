import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Header.css'; // Import the external CSS file

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle logout
  const handleLogout = () => {
    // You can add additional logout logic here, like clearing user data or tokens
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Title Section */}
        <h1 className="header-title">RBAC Dashboard</h1>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/users" className="nav-link">Users</a>
            </li>
            <li className="nav-item">
              <a href="/roles" className="nav-link">Roles</a>
            </li>
            <li className="nav-item">
              <a href="/settings" className="nav-link">Settings</a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="btn-login">Login</button>
          <button className="btn-logout" onClick={handleLogout}>Logout</button> {/* Attach the handleLogout function */}
        </div>
      </div>
    </header>
  );
};

export default Header;
