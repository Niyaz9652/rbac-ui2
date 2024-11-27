import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../../services/api";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./UserList.css";

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again later.");
      }
    };

    fetchUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
      setError("Failed to delete user. Please try again.");
    }
  };

  if (error) {
    return <div className="user-list-error">{error}</div>;
  }

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">User Management</h1>
      {users.length === 0 ? (
        <p className="user-list-message">No users found.</p>
      ) : (
        <table className="user-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(user)}
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
