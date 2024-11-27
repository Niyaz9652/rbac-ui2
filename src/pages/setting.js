import React, { useState } from 'react';
import './setting.css'; // Import styles for the settings page

const Setting = () => {
  const [theme, setTheme] = useState('light'); // Example: dark/light theme toggle

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply the theme globally
  };

  return (
    <div className="setting-container">
      <h2 className="setting-title">Settings</h2>
      <div className="setting-option">
        <label htmlFor="theme" className="setting-label">Theme</label>
        <button
          id="theme"
          onClick={handleThemeChange}
          className="setting-button"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default Setting;
