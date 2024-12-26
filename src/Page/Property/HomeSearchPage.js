import React, { useState, useEffect } from 'react';
import './homeSearchPage.css'; // Import your CSS file
import PropertyList from '../../Service/PropertyList';
import fetchProperties from '../../Service/fetchProperties';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchData();
  }, []);

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

  const handleClear = () => {
    setLocation('');
    setPropertyType('');
    setPrice(500000);
    setBedrooms(1);
    setBathrooms(1);
    setGarage(false);
    setSwimmingPool(false);
    setFilteredProperties(properties);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl">
        <h1 className="text-3xl">Find Your Dream Property</h1>
        <form>
          <div className="grid">
            {/* Location */}
            <div>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor="propertyType">Property Type</label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Select Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price">Price Range</label>
              <input
                type="range"
                id="price"
                min="100000"
                max="1000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="flex">
                <span>$100,000</span>
                <span>${Number(price).toLocaleString()}</span>
                <span>$1,000,000</span>
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>

            {/* Bathrooms */}
            <div>
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>

            {/* Garage */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="garage"
                checked={garage}
                onChange={() => setGarage(!garage)}
              />
              <label htmlFor="garage">Garage</label>
            </div>

            {/* Swimming Pool */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="swimmingPool"
                checked={swimmingPool}
                onChange={() => setSwimmingPool(!swimmingPool)}
              />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>

            {/* Buttons */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3">
              <button type="button" onClick={handleSearch} className="btn-primary">
                Search
              </button>
              <button type="button" onClick={handleClear} className="btn-secondary">
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
