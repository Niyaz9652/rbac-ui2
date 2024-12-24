import React, { useEffect, useState } from 'react';
import fetchProperties from '../../Service/propertyService';
import './currentListings.css';

function CurrentListingsPage() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const [expandedProperty, setExpandedProperty] = useState(null); // Track expanded property

  const itemsPerPage = 3; // Number of properties to display per page

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

  // Pagination logic
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
      {/* Hero Section */}
      <h1 className="text-4xl font-semibold text-center mb-8">Current Listings</h1>


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
        {paginatedProperties.map((property) => (
          <div
            key={property.id}
            className={`property-card ${
              expandedProperty === property.id ? 'expanded' : ''
            }`}
          >
            {/* Image */}
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-image cursor-pointer"
              onClick={() => toggleExpand(property.id)}
            />

            {/* Text content (visible only if expanded) */}
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

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <p className="empty-state">No properties found.</p>
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
    </div>
  );
}

export default CurrentListingsPage;
