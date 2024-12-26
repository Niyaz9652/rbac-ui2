import React, { useEffect, useState } from 'react';
import fetchProperties from '../../Service/propertyService';
import './currentListings.css';

function CurrentListingsPage() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const [expandedProperty, setExpandedProperty] = useState(null);

  const itemsPerPage = 3;

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
    <div className="listings-page">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Current Listings</h1>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by name or address..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="property-grid">
        {paginatedProperties.map((property) => (
          <div
            key={property.id}
            className={`property-card ${
              expandedProperty === property.id ? 'expanded' : ''
            }`}
          >
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-image"
              onClick={() => toggleExpand(property.id)}
            />

            {expandedProperty === property.id && (
              <div className="property-details">
                <div className="property-badge">${property.rate}</div>
                <h3 className="property-title">{property.name}</h3>
                <p className="property-address">{property.address}</p>
                <div className="property-footer">
                  <p className="property-price">${property.price}</p>
                  <button className="view-details-button">View Details</button>
                </div>
              </div>
            )}
          </div>
        ))}

        {filteredProperties.length === 0 && (
          <p className="empty-state">No properties found.</p>
        )}
      </div>

      <div className="pagination-controls">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="pagination-arrow"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="pagination-arrow"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default CurrentListingsPage;
