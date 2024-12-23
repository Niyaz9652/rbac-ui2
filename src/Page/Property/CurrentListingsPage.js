import React, { useEffect, useState } from 'react';
import fetchProperties from '../../Service/propertyService';
import './currentListings.css';

function CurrentListingsPage() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching current listings:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Current Listings</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by name or address..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Property Listings Section */}
      <div className="property-grid">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-badge">${property.rate}</div>
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-image"
            />
            <h3 className="property-title">{property.name}</h3>
            <p className="property-address">{property.address}</p>
            <div className="property-footer">
              <p className="property-price">${property.price}</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        ))}
        {filteredProperties.length === 0 && (
          <p className="empty-state">No properties found.</p>
        )}
      </div>
    </div>
  );
}

export default CurrentListingsPage;
