import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Import styles for the logout page

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication status
    localStorage.removeItem('auth');
    navigate('/login'); // Redirect to login after logout
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2 className="logout-message">You have been logged out</h2>
    </div>
  );
};

export default Logout;
