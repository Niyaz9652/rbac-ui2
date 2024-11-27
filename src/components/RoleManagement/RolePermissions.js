import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import { fetchPermissions, assignPermission } from "../../services/api";
import "./RolePermissions.css";

const RolePermissions = ({ roleId, refresh }) => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setLoading(true);
    fetchPermissions()
      .then((response) => {
        setPermissions(response.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching permissions:", err);
        setError("Failed to fetch permissions. Please try again.");
        setLoading(false);
      });
  }, []);

  const handlePermissionToggle = (permission) => {
    const updatedPermissions = selectedPermissions.includes(permission)
      ? selectedPermissions.filter((p) => p !== permission)
      : [...selectedPermissions, permission];
    setSelectedPermissions(updatedPermissions);
  };

  const handleSave = () => {
    setLoading(true);
    assignPermission(roleId, selectedPermissions)
      .then(() => {
        refresh();
        alert("Permissions updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating permissions:", error);
        setError("Failed to update permissions. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  // Handle "Back" button click to navigate to the dashboard
  const handleBackClick = () => {
    navigate("/"); // Use navigate instead of history.push
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="role-permissions">
      {/* Back Button */}
      <button className="back-btn" onClick={handleBackClick}>
        &larr; Back to Dashboard
      </button>

      <h2>Manage Permissions</h2>
      <div className="permissions-list">
        {permissions.map((permission) => (
          <label key={permission} className="permission-label">
            <input
              type="checkbox"
              checked={selectedPermissions.includes(permission)}
              onChange={() => handlePermissionToggle(permission)}
            />
            {permission}
          </label>
        ))}
      </div>
      <button
        className="save-button"
        onClick={handleSave}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Permissions"}
      </button>
    </div>
  );
};

export default RolePermissions;
