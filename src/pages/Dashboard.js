import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaUserShield, FaLock } from "react-icons/fa"; // Import icons from React Icons
import "./Dashboard.css"; // Importing the CSS file

const Dashboard = () => {
  // State to manage which section to display in the main content
  const [activeSection, setActiveSection] = useState("users");

  // Function to handle sidebar link clicks
  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  // Render the content based on the selected section
  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return <div>Manage Users Content</div>;
      case "roles":
        return <div>Manage Roles Content</div>;
      case "permissions":
        return <div>Manage Permissions Content</div>;
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <Link
              to="/users"
              className={`sidebar-link ${activeSection === "users" ? "active" : ""}`}
              onClick={() => handleLinkClick("users")}
            >
              <FaUsers className="sidebar-icon" /> Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/roles"
              className={`sidebar-link ${activeSection === "roles" ? "active" : ""}`}
              onClick={() => handleLinkClick("roles")}
            >
              <FaUserShield className="sidebar-icon" /> Manage Roles
            </Link>
          </li>
          <li>
            <Link
              to="/permissions"
              className={`sidebar-link ${activeSection === "permissions" ? "active" : ""}`}
              onClick={() => handleLinkClick("permissions")}
            >
              <FaLock className="sidebar-icon" /> Manage Permissions
            </Link>
          </li>
        </ul>
      </div>

      <div className="dashboard-content">
        <h3>Dashboard</h3>
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
