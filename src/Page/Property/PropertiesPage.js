import React, { useEffect, useState } from 'react';
import fetchProperties from '../../Service/propertyService';
import { Outlet } from 'react-router-dom';
import '../Property/recentSalesPage.css';

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const [expandedProperty, setExpandedProperty] = useState(null); // Track which property is expanded

  const itemsPerPage = 3; // Number of containers to display at a time

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to load properties:', error);
      }
    };
    loadProperties();
  }, []);

  // Filtered properties based on search query
  const filteredProperties = searchQuery
    ? properties.filter(
        (property) =>
          property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : properties;

  // Paginate properties
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleExpand = (propertyId) => {
    setExpandedProperty((prev) => (prev === propertyId ? null : propertyId));
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      <h1 className="text-4xl font-semibold text-center mb-8">Properties</h1>

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
        {paginatedProperties.map((property) => (
          <div
            className={`property-card ${
              expandedProperty === property.id ? "expanded" : ""
            }`}
            key={property.id}
          >
            {/* Image */}
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-image cursor-pointer"
              onClick={() => toggleExpand(property.id)}
            />

            {/* Text content (only visible if expanded) */}
            {expandedProperty === property.id && (
              <div className="property-expanded-content">
                <div className="property-details">
                  <h2 className="property-name">{property.name}</h2>
                  <p className="property-description">{property.address}</p>
                  <p className="property-description">{property.description}</p>
                  <div className="property-footer">
                    <button className="view-details-button">View Details</button>
                    <span className="property-price">
                      ${property.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Fallback if no properties match the search query */}
        {filteredProperties.length === 0 && (
          <p className="text-center text-gray-600 mt-4">No properties found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls mt-8 flex justify-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="pagination-arrow bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="pagination-arrow bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>

      {/* Nested Routes Section */}
      <Outlet />
    </div>
  );
};

export default PropertiesPage;
