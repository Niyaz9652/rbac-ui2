import React, { useState } from 'react';
import './teamPage.css'; // Import the new CSS file

const TeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedMember, setExpandedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO & Founder', expertise: 95, image: '../Images/5.avif', bio: 'John has over 20 years of experience in business leadership.', social: { linkedin: '#', twitter: '#' } },
    { id: 2, name: 'Jane Smith', role: 'Chief Marketing Officer', expertise: 90, image: '../Images/2.avif', bio: 'Jane is an expert in marketing strategies with a focus on growth.', social: { linkedin: '#', twitter: '#' } },
    { id: 3, name: 'Mike Johnson', role: 'Lead Developer', expertise: 85, image: '../Images/3.avif', bio: 'Mike specializes in cutting-edge software solutions.', social: { linkedin: '#', twitter: '#' } },
    { id: 4, name: 'Emily Davis', role: 'Project Manager', expertise: 88, image: '../Images/4.avif', bio: 'Emily is skilled at leading cross-functional teams.', social: { linkedin: '#', twitter: '#' } },
    { id: 5, name: 'Sarah Lee', role: 'UI/UX Designer', expertise: 92, image: '../Images/5.avif', bio: 'Sarah creates visually stunning and user-friendly designs.', social: { linkedin: '#', twitter: '#' } },
    { id: 6, name: 'David Miller', role: 'Software Engineer', expertise: 80, image: '../Images/c2.jpg', bio: 'David is a full-stack engineer with extensive coding skills.', social: { linkedin: '#', twitter: '#' } },
  ];

  const imagesPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerPage < teamMembers.length ? prevIndex + imagesPerPage : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - imagesPerPage >= 0 ? prevIndex - imagesPerPage : teamMembers.length - imagesPerPage
    );
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery) || member.role.toLowerCase().includes(searchQuery)
  );

  const currentMembers = filteredMembers.slice(currentIndex, currentIndex + imagesPerPage);

  const toggleAccordion = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
    setSelectedMember(id);
  };

  return (
    <div className="team-page">
      <div className="hero-section">
        <h1 className="hero-title">Meet Our Team</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or role"
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Team Member Section */}
      <div className="team-section">
        {/* Left Arrow */}
        <button
          className="nav-button left-0"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Team Members */}
        <div className="team-members">
          {currentMembers.map((member) => (
            <div
              className={`team-member-card ${selectedMember === member.id ? 'selected' : ''}`}
              key={member.id}
              onClick={() => toggleAccordion(member.id)}
            >
              <img
                className="member-image"
                src={member.image}
                alt={member.name}
              />
              <div className="member-details">
                <h2 className="member-name">{member.name}</h2>
                <p className="member-role">{member.role}</p>
                <div className="mt-2">
                  <div className="expertise-bar">
                    <div
                      className="expertise-progress"
                      style={{ width: `${member.expertise}%` }}
                    ></div>
                  </div>
                  <p className="expertise-text">{member.expertise}% Expertise</p>
                </div>

                {/* Accordion content */}
                {expandedMember === member.id && (
                  <div className="accordion-content">
                    <p className="accordion-text">{member.bio}</p>
                    <div className="social-links">
                      <a
                        href={member.social.linkedin}
                        className="social-link"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={member.social.twitter}
                        className="social-link-twitter"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="nav-button right-0"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TeamPage;
