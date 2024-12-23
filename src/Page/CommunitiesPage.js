import React, { useState } from 'react';
import './communitiesPage.css'; // Import Tailwind-based CSS file

const CommunitiesPage = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedBy, setSortedBy] = useState('name');
  const [favorites, setFavorites] = useState([]);

  const communities = [
    {
      title: "Downtown District",
      description: "A vibrant, bustling area filled with shops, restaurants, and cultural attractions.",
      image: "../Images/h1.avif",
      details: "Located at the heart of the city..."
    },
    {
      title: "Lakeside Village",
      description: "A peaceful community near the lake...",
      image: "../Images/h2.avif",
      details: "Lakeside Village is a serene community..."
    },
    {
      title: "Hilltop Haven",
      description: "Nestled in the hills, this community offers stunning views...",
      image: "../Images/h3.avif",
      details: "Hilltop Haven is designed for those seeking a peaceful lifestyle..."
    }
  ];

  const filteredCommunities = communities.filter(community =>
    community.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCommunities = filteredCommunities.sort((a, b) => {
    if (sortedBy === 'name') return a.title.localeCompare(b.title);
    if (sortedBy === 'description') return a.description.localeCompare(b.description);
    return 0;
  });

  const handleFavoriteClick = (community) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(community.title)
        ? prevFavorites.filter(item => item !== community.title)
        : [...prevFavorites, community.title]
    );
  };

  const handleCommunityClick = (community) => setSelectedCommunity(community);

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12">
      <div className="flex justify-center items-center text-center mb-8 h-40">
        <h1 className="text-3xl font-extrabold text-gray-800 animate-fadeIn">Our Communities</h1>
      </div>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search Communities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-sm"
        />
      </div>
      <div className="mb-4 flex justify-center">
        <select
          value={sortedBy}
          onChange={(e) => setSortedBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="name">Sort by Name</option>
          <option value="description">Sort by Description</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCommunities.map((community, index) => (
          <div
            className="fade-in-card"
            key={index}
            onClick={() => handleCommunityClick(community)}
          >
            <img
              className="w-full h-56 object-cover"
              src={community.image}
              alt={community.title}
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{community.title}</h2>
              <p className="text-gray-600">{community.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavoriteClick(community);
                }}
                className={`mt-2 ${
                  favorites.includes(community.title) ? 'text-yellow-500' : 'text-gray-500'
                }`}
              >
                {favorites.includes(community.title) ? '★ Favorite' : '☆ Add to Favorites'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCommunity && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{selectedCommunity.title}</h2>
            <p className="modal-description">{selectedCommunity.details}</p>
            <button
              className="close-modal"
              onClick={() => setSelectedCommunity(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunitiesPage;
