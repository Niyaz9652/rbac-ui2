import React, { useState } from "react";
import { addUser, editUser } from "../../services/api";
import "./AddEditRoleModal.css";

const AddEditRoleModal = ({ role, onClose, refresh }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      console.error("Role name is required.");
      return;
    }

    const action = role ? editUser(role.id, formData) : addUser(formData);
    action
      .then(() => {
        refresh();
        onClose();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handlePermissionChange = (permission) => {
    const updatedPermissions = formData.permissions.includes(permission)
      ? formData.permissions.filter((p) => p !== permission)
      : [...formData.permissions, permission];
    setFormData({ ...formData, permissions: updatedPermissions });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">{role ? "Edit Role" : "Add Role"}</h2>
        <div className="mb-4">
          <label>Role Name:</label>
          <input
            type="text"
            className="input-field"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label>Permissions:</label>
          <div className="permission-container">
            {["Read", "Write", "Delete"].map((permission) => (
              <label key={permission} className="permission-label">
                <input
                  type="checkbox"
                  checked={formData.permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                {permission}
              </label>
            ))}
          </div>
        </div>
        <div className="action-buttons">
          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditRoleModal;
