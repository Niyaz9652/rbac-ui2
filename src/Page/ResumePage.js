import React from 'react';
import './resumePage.css';  // Import the new Tailwind CSS file

const ResumePage = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-10">
      {/* Header Section */}
      <div className="flex justify-center items-center text-center mb-8 h-[200px]">
        <h1 className="text-4xl font-semibold text-center mb-8">Recent Achievements</h1>
      </div>

      {/* Resume Content Container */}
      <div className="resume-content-container">
        {/* Achievements Section */}
        <section className="resume-achievements">
          <h2 className="resume-achievements-title">Our Achievements in Real Estate</h2>
          <ul className="resume-achievements-list">
            <li>Successfully closed over 1,000 residential properties.</li>
            <li>Developed more than 500,000 square feet of commercial space.</li>
            <li>Built a portfolio worth over $200 million in real estate investments.</li>
            <li>
              Recognized as one of the top 10 real estate agencies in the region for the last 5
              years.
            </li>
          </ul>
        </section>

        {/* Milestones Section */}
        <section className="resume-milestones">
          <h2 className="resume-milestones-title">Our Real Estate Milestones</h2>
          <div className="resume-milestones-grid">
            {[ 
              {
                year: '2023',
                image: '../Images/a1.avif',
                text: 'Launched a luxury residential complex in downtown, with 300+ units sold within 6 months.',
              },
              {
                year: '2021',
                image: '../Images/a2.avif',
                text: 'Expanded our portfolio with the acquisition of a 15-acre commercial property for future development.',
              },
              {
                year: '2019',
                image: '../Images/a3.avif',
                text: 'Opened 5 new branch offices in different states to increase our regional presence.',
              },
              {
                year: '2017',
                image: '../Images/a4.avif',
                text: 'Broke ground on a mixed-use development that includes residential, office, and retail spaces.',
              },
            ].map((milestone, index) => (
              <div 
                className="resume-milestone" 
                key={index}
              >
                <img
                  src={milestone.image}
                  alt={`${milestone.year} Milestone`}
                  className="milestone-image"
                />
                <h3 className="resume-milestone-title">{milestone.year}</h3>
                <p className="resume-milestone-text">{milestone.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
