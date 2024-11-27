import React, { useState, useEffect } from "react";
import { fetchRoles, deleteUser } from "../../services/api";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./RoleList.css";

const RoleList = ({ onEdit }) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRoles();
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  return (
    <div className="role-list-container">
      <h1 className="role-list-title">Role Management</h1>
      <table className="role-list-table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.length === 0 ? (
            <tr>
              <td colSpan="3" className="role-list-empty">
                No roles found.
              </td>
            </tr>
          ) : (
            roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>{role.permissions.join(", ")}</td>
                <td>
                  <button
                    className="action-button edit"
                    onClick={() => onEdit(role)}
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDelete(role.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
