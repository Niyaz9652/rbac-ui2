import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import RoleList from "../components/RoleManagement/RoleList";
import AddEditRoleModal from "../components/RoleManagement/AddEditRoleModal";
import "./roles.css"; // Import the CSS file

const Roles = () => {
  const [modalRole, setModalRole] = useState(null); // For managing the selected role
  const [isModalOpen, setIsModalOpen] = useState(false); // For managing modal visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Close the modal and reset the role state
  const refreshRoles = () => {
    setModalRole(null);
    setIsModalOpen(false);
  };

  // Handle opening the modal with a specific role
  const handleEditRole = (role) => {
    setModalRole(role);
    setIsModalOpen(true);
  };

  // Handle "Back" button click to navigate to the dashboard
  const handleBackClick = () => {
    navigate("/"); // Use navigate to go to the dashboard route
  };

  return (
    <div className="roles-container">
      {/* Back Button */}
      <button className="back-btn" onClick={handleBackClick}>
        &larr; Back to Dashboard
      </button>

      {/* Role List Component */}
      <div className="role-list">
        <RoleList onEdit={handleEditRole} />
      </div>

      {/* Add/Edit Role Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">Edit Role</div>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <AddEditRoleModal
              role={modalRole}
              onClose={() => setIsModalOpen(false)}
              refresh={refreshRoles}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
