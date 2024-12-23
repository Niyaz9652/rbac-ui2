import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../Service/blogService';
import './blogPage.css'; // Import the custom CSS

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const data = await fetchBlogPosts();
      setBlogPosts(data);
    };
    loadBlogPosts();
  }, []);

  // Autoplay functionality: Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [blogPosts]);

  // Carousel navigation logic
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="hero-title">Our Blog</h1>
        <p className="hero-subtitle">Explore the latest updates, tips, and insights in real estate.</p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-wrapper">
        {/* Carousel Wrapper */}
        {blogPosts.slice(0, 6).map((post, index) => (
          <div
            key={post.id}
            className={`carousel-item transition-transform duration-700 ease-in-out ${
              index === activeIndex ? 'carousel-item-active' : 'carousel-item-inactive'
            }`}
          >
            <div
              className={`carousel-card ${index === activeIndex ? 'carousel-card-active' : ''}`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="carousel-image"
              />
              <div className="carousel-details">
                <h2 className="carousel-title">{post.title}</h2>
                <p className="carousel-content">{post.content.substring(0, 150)}...</p>
                <div className="mt-4">
                  <button className="carousel-button">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={handlePrev}
        className="carousel-nav-btn carousel-prev-btn"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="carousel-nav-btn carousel-next-btn"
      >
        &rarr;
      </button>
    </div>
  );
};

export default BlogPage;
