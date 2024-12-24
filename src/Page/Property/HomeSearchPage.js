import React, { useState, useEffect } from 'react';
import './homeSearchPage.css'; // Import your CSS or Tailwind file
import PropertyList from '../../Service/PropertyList';
import fetchProperties from '../../Service/fetchProperties'; // Fetch the properties from a separate file

const HomeSearchPage = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState(500000);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [garage, setGarage] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Fetch properties on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
        setFilteredProperties(data); // Show all properties by default
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchData();
  }, []);

  // Apply search filters
  const handleSearch = () => {
    const filtered = properties.filter((property) => {
      const matchesLocation = location
        ? property.address.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesType = propertyType
        ? property.type && property.type.toLowerCase() === propertyType.toLowerCase()
        : true;
      const matchesPrice = property.price <= Number(price);
      const matchesBedrooms = property.bedrooms >= Number(bedrooms);
      const matchesBathrooms = property.bathrooms >= Number(bathrooms);
      const matchesGarage = garage ? property.garage === true : true;
      const matchesSwimmingPool = swimmingPool ? property.swimmingPool === true : true;

      return (
        matchesLocation &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesGarage &&
        matchesSwimmingPool
      );
    });

    setFilteredProperties(filtered);
  };

  // Reset filters
  const handleClear = () => {
    setLocation('');
    setPropertyType('');
    setPrice(500000);
    setBedrooms(1);
    setBathrooms(1);
    setGarage(false);
    setSwimmingPool(false);
    setFilteredProperties(properties); // Reset to original properties
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl mb-4">Find Your Dream Property</h1>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Location */}
            <div className="mb-4">
              <label htmlFor="location" className="block">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Property Type */}
            <div className="mb-4">
              <label htmlFor="propertyType" className="block">Property Type</label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-4">
              <label htmlFor="price" className="block">Price Range</label>
              <input
                type="range"
                id="price"
                min="100000"
                max="1000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>$100,000</span>
                <span>${Number(price).toLocaleString()}</span>
                <span>$1,000,000</span>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="mb-4">
              <label htmlFor="bedrooms" className="block">Bedrooms</label>
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Bathrooms */}
            <div className="mb-4">
              <label htmlFor="bathrooms" className="block">Bathrooms</label>
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Garage */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="garage"
                checked={garage}
                onChange={() => setGarage(!garage)}
                className="mr-2"
              />
              <label htmlFor="garage">Garage</label>
            </div>

            {/* Swimming Pool */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="swimmingPool"
                checked={swimmingPool}
                onChange={() => setSwimmingPool(!swimmingPool)}
                className="mr-2"
              />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleSearch}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Clear
              </button>
            </div>
          </div>
        </form>

        {/* Displaying filtered properties */}
        <PropertyList properties={filteredProperties} />
      </div>
    </div>
  );
};

export default HomeSearchPage;
