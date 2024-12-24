const properties = [
    {
      id: 1,
      name: "Luxury Beachfront Villa",
      address: "123 Ocean Drive, Malibu, CA",
      price: 1500000,
      bedrooms: 4,
      bathrooms: 3,
      garage: true,
      swimmingPool: true,
      imageUrl: "/images/r1.avif",
    },
    {
      id: 2,
      name: "Modern City Apartment",
      address: "456 City St, New York, NY",
      price: 850000,
      bedrooms: 2,
      bathrooms: 1,
      garage: false,
      swimmingPool: false,
      imageUrl: "/images/r2.avif",
    },
    {
      id: 3,
      name: "Cozy Suburban Home",
      address: "789 Maple Ave, Austin, TX",
      price: 350000,
      bedrooms: 3,
      bathrooms: 2,
      garage: true,
      swimmingPool: false,
      imageUrl: "/images/r3.avif",
    },
  ];
  
  const fetchProperties = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(properties);
      }, 1000); // Simulate network delay
    });
  };
  
  export default fetchProperties;
  