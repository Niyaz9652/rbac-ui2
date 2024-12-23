import React, { useState } from 'react';
import './homeSearchPage.css'; // Import the Tailwind CSS file

const HomeSearchPage = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState(500000);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [garage, setGarage] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      location,
      propertyType,
      price,
      bedrooms,
      bathrooms,
      garage,
      swimmingPool,
    });
  };

  const handleClear = () => {
    setLocation('');
    setPropertyType('');
    setPrice(500000);
    setBedrooms(1);
    setBathrooms(1);
    setGarage(false);
    setSwimmingPool(false);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl">
        <h1 className="text-3xl">Find Your Dream Property</h1>
        <form onSubmit={handleSearch}>
          <div className="grid">
            <div className="mb-4">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
                <span>${price.toLocaleString()}</span>
                <span>$1,000,000</span>
              </div>
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="garage"
                checked={garage}
                onChange={() => setGarage(!garage)}
              />
              <label htmlFor="garage">Garage</label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="swimmingPool"
                checked={swimmingPool}
                onChange={() => setSwimmingPool(!swimmingPool)}
              />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-3">
              <button type="submit" className="btn-primary">Search</button>
              <button type="button" className="btn-secondary" onClick={handleClear}>Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeSearchPage;
