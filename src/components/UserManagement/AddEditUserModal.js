import React, { useState } from "react";
import { addUser, editUser } from "../../services/api";
import "./AddEditUserModal.css";

const AddEditUserModal = ({ user, onClose, refresh }) => {
  const [formData, setFormData] = useState(
    user || { name: "", email: "", role: "" }
  );

  const handleSubmit = () => {
    const action = user ? editUser(user.id, formData) : addUser(formData);

    action
      .then(() => {
        refresh();
        onClose();
      })
      .catch((err) => {
        console.error("Error saving user:", err);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">
          {user ? "Edit User" : "Add User"}
        </h2>
        <div className="modal-field">
          <label className="modal-label">Name:</label>
          <input
            type="text"
            className="modal-input"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className="modal-field">
          <label className="modal-label">Email:</label>
          <input
            type="email"
            className="modal-input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="modal-actions">
          <button
            className="modal-button modal-button-save"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="modal-button modal-button-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUserModal;
