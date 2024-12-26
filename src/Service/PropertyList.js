import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div className="mt-8">
      {properties.length === 0 ? (
        <p className="text-center text-gray-600">
          No properties found based on your search criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white p-4 shadow-lg rounded-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Property Image */}
              <img
                src={property.imageUrl}
                alt={property.name}
                className="w-full h-40 object-cover rounded-md"
              />

              {/* Property Name */}
              <h2 className="text-xl font-semibold mt-4">{property.name}</h2>

              {/* Property Address */}
              <p className="text-gray-500">{property.address}</p>

              {/* Property Price */}
              <p className="text-blue-600 font-semibold mt-2">
                ${property.price.toLocaleString()}
              </p>

              {/* Property Details */}
              <div className="mt-2">
                <p>🛏️ Bedrooms: {property.bedrooms}</p>
                <p>🛁 Bathrooms: {property.bathrooms}</p>
                <p>🚗 Garage: {property.garage ? 'Available' : 'Not Available'}</p>
                <p>🏊 Swimming Pool: {property.swimmingPool ? 'Yes' : 'No'}</p>
              </div>

              {/* Property Rating */}
              <p className="mt-2">
                ⭐ Rating:{' '}
                {property.rate !== undefined ? property.rate : 'Not Rated'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
