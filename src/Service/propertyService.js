const properties = [
  {
    id: 1,
    name: 'Luxury Beachfront Villa',
    address: '123 Ocean Drive, Malibu, CA',
    price: 1500000,
    rate: 4.5,
    imageUrl: '../Images/p1.jpeg', // Use a path relative to the public folder
  },
  {
    id: 2,
    name: 'Modern City Apartment',
    address: '456 City St, New York, NY',
    price: 850000,
    rate: 4.0,
    imageUrl: '../Images/p2.jpeg', // Use a path relative to the public folder
  },
  {
    id: 3,
    name: 'Cozy Suburban Home',
    address: '789 Maple Ave, Austin, TX',
    price: 350000,
    rate: 4.8,
    imageUrl: '../Images/p3.jpeg', // Use a path relative to the public folder
  },
  {
    id: "prop4",
    name: "Seaside Retreat",
    address: "789 Ocean Drive, Miami",
    price: 2500000,
    imageUrl: "../Images/p4.jpeg", // Replace with actual URL
  },
  {
    id: "prop5",
    name: "Mountain Cabin",
    address: "345 Peak Road, Denver",
    price: 900000,
    imageUrl: "../Images/p5.jpeg", // Replace with actual URL
  },
  {
    id: "prop6",
    name: "Urban Loft",
    address: "567 Central Ave, New York",
    price: 1200000,
    imageUrl: "../Images/p6.jpeg", // Replace with actual URL
  },
];

// Function to fetch properties (static data now)
const fetchProperties = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(properties);
    }, 1000); // Simulating network delay of 1 second
  });
};

export default fetchProperties;
  