import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import UserList from "../components/UserManagement/UserList";
import AddEditUserModal from "../components/UserManagement/AddEditUserModal";

const Users = () => {
  const [modalUser, setModalUser] = useState(null); // For managing the selected user
  const [isModalOpen, setIsModalOpen] = useState(false); // For managing modal visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Refreshes the user list and closes the modal
  const refreshUsers = () => {
    setModalUser(null);
    setIsModalOpen(false);
  };

  // Opens the modal with the selected user for editing
  const handleEditUser = (user) => {
    setModalUser(user);
    setIsModalOpen(true);
  };

  // Handle "Back" button click to navigate to the dashboard
  const handleBackClick = () => {
    navigate("/"); // Navigate to the dashboard using useNavigate
  };

  return (
    <div className="users-container">
      {/* Back Button */}
      <button className="back-btn" onClick={handleBackClick}>
        &larr; Back to Dashboard
      </button>

      {/* User List Component */}
      <div className="user-list-container">
        <UserList onEdit={handleEditUser} />
      </div>

      {/* Add/Edit User Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <AddEditUserModal
            user={modalUser}
            onClose={() => setIsModalOpen(false)}
            refresh={refreshUsers}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
