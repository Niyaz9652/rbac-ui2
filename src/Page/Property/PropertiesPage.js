import React, { useEffect, useState } from 'react';
import fetchProperties from '../../Service/propertyService'; // Corrected import
import { Outlet } from 'react-router-dom'; // Import Outlet for sub-routes
import '../Property/recentSalesPage.css'; // Import the custom CSS file

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties(); // Correctly calling the default export
        setProperties(data);
      } catch (error) {
        console.error('Failed to load properties:', error);
      }
    };
    loadProperties();
  }, []);

  // Filter properties based on the search query
  const filteredProperties = searchQuery
    ? properties.filter(
        (property) =>
          property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : properties;

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Properties</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar mb-8">
        <input
          type="text"
          placeholder="Search properties by name or address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Properties List Section */}
      <div className="properties-list">
        {filteredProperties.map((property) => (
          <div className="property-card" key={property.id}>
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-image"
            />
            <div className="property-details">
              <h2 className="property-name">{property.name}</h2>
              <p className="property-description">{property.address}</p>
              <div className="property-footer">
                <button className="view-details-button">View Details</button>
                <span className="property-price">
                  ${property.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Fallback if no properties match the search query */}
        {filteredProperties.length === 0 && (
          <p className="text-center text-gray-600 mt-4">No properties found.</p>
        )}
      </div>

      {/* Nested Routes Section */}
      <Outlet /> {/* Renders the sub-pages like CurrentListingsPage, RecentSalesPage, and HomeSearchPage */}
    </div>
  );
};

export default PropertiesPage;
