import React, { useEffect, useState } from "react";
import fetchProperties from "../../Service/propertyService"; // Corrected import
import "../Property/recentSalesPage.css"; // Import the new Tailwind CSS file

const RecentSalesPage = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching recent sales:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Recent Sales</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar mb-8">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Properties List Section */}
      <div className="properties-list">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.imageUrl}
              alt={property.name}
              className="property-image"
            />
            <div className="property-details">
              <h2 className="property-name">{property.name}</h2>
              <p className="property-description">{property.address}</p>
              <div className="property-footer">
                <span className="property-price">{`Sold for $${property.price.toLocaleString()}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSalesPage;
