import React from "react";
import { activateUser, deactivateUser, resetPassword } from "../../services/api";
import "./UserActions.css";

const UserActions = ({ userId, refresh }) => {
  const handleAction = async (action, successMessage) => {
    try {
      await action(userId);
      if (successMessage) {
        alert(successMessage);
      }
      refresh(); // Trigger refresh after completing the action.
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Failed to complete the action. Please try again.");
    }
  };

  return (
    <div className="user-actions">
      <button
        className="activate-btn"
        onClick={() => handleAction(activateUser, "User activated successfully!")}
      >
        Activate
      </button>
      <button
        className="deactivate-btn"
        onClick={() => handleAction(deactivateUser, "User deactivated successfully!")}
      >
        Deactivate
      </button>
      <button
        className="reset-btn"
        onClick={() => handleAction(resetPassword, "Password reset successfully!")}
      >
        Reset Password
      </button>
    </div>
  );
};

export default UserActions;
