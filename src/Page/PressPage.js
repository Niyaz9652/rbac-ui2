import React, { useState } from 'react';
import './pressPage.css'; // Import the custom Tailwind CSS

const PressPage = () => {
  // State to manage the visibility of extra content for each article
  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleContent = (articleIndex) => {
    setExpandedArticle(expandedArticle === articleIndex ? null : articleIndex);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16">
      {/* Hero Section */}
      <div className="flex justify-center items-center text-center mb-8 h-[200px]">
        <h1 className="text-4xl font-semibold text-center mb-8">Press & Media</h1>
      </div>

      {/* Press Articles Section */}
      <div className="press-article-container">
        {/* Press Article 1 */}
        <div className="press-article">
          <img
            className="press-article-image"
            src="../Images/m1.avif"
            alt="Press"
          />
          <div className="press-article-content">
            <h2 className="press-article-title">Featured in City Magazine</h2>
            <p className="press-article-text">
              Our company was recently featured in City Magazine for our innovative community development projects.
            </p>
            <button
              className="read-more-button"
              onClick={() => toggleContent(1)}
            >
              {expandedArticle === 1 ? 'Show Less' : 'Read More'}
            </button>
            {expandedArticle === 1 && (
              <div className="extra-content mt-4 text-gray-600">
                <p>Here is some extra information related to the article. It provides more details about the featured project and its impact on the community.</p>
              </div>
            )}
          </div>
        </div>

        {/* Press Article 2 */}
        <div className="press-article">
          <img
            className="press-article-image"
            src="../Images/m2.avif"
            alt="Press"
          />
          <div className="press-article-content">
            <h2 className="press-article-title">Innovative Solutions in Real Estate</h2>
            <p className="press-article-text">
              We were recognized for our innovative approach to real estate development in an industry-leading publication.
            </p>
            <button
              className="read-more-button"
              onClick={() => toggleContent(2)}
            >
              {expandedArticle === 2 ? 'Show Less' : 'Read More'}
            </button>
            {expandedArticle === 2 && (
              <div className="extra-content mt-4 text-gray-600">
                <p>Here is some extra information about the solutions we presented in the real estate industry and their long-term effects on market trends.</p>
              </div>
            )}
          </div>
        </div>

        {/* Press Article 3 */}
        <div className="press-article">
          <img
            className="press-article-image"
            src="../Images/m3.avif"
            alt="Press"
          />
          <div className="press-article-content">
            <h2 className="press-article-title">Sustainable Practices Highlighted</h2>
            <p className="press-article-text">
              Our commitment to sustainability in construction was highlighted in a recent environmental report.
            </p>
            <button
              className="read-more-button"
              onClick={() => toggleContent(3)}
            >
              {expandedArticle === 3 ? 'Show Less' : 'Read More'}
            </button>
            {expandedArticle === 3 && (
              <div className="extra-content mt-4 text-gray-600">
                <p>Additional insights into the sustainability practices we have implemented in construction and their positive environmental impact.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
