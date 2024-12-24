import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div className="mt-8">
      {properties.length === 0 ? (
        <p>No properties found based on your search criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white p-4 shadow-md rounded-md">
              <img
                src={property.imageUrl}
                alt={property.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl mt-4">{property.name}</h2>
              <p>{property.address}</p>
              <p>${property.price.toLocaleString()}</p>
              <p>Rating: {property.rate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
