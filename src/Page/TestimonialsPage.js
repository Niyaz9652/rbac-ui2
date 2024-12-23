import React from "react";
import "./testimonialsPage.css";

const testimonials = [
  {
    image: "../Images/c1.avif",
    name: "Sarah Williams",
    role: "Homebuyer",
    text: "Working with this team was an incredible experience. They helped us find our dream home and made the entire process seamless.",
    rating: 5,
  },
  {
    image: "../Images/c2.jpg",
    name: "Michael Johnson",
    role: "Investor",
    text: "Their expertise and dedication were evident every step of the way. We couldn’t be happier with our investment.",
    rating: 4,
  },
  {
    image: "../Images/c3.avif",
    name: "Jessica Lee",
    role: "Home Seller",
    text: "A truly exceptional team. They were there to answer all our questions and made us feel supported throughout the entire process.",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-light-gray py-12 px-6">
      <div className="text-center mb-8">
        <h1 className="text-primary">What Our Clients Say</h1>
        <p className="text-secondary mt-2">
          We pride ourselves on delivering exceptional service to each and every client.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map(({ image, name, role, text, rating }, index) => (
          <div key={index} className="testimonial-card">
            <img
              className="testimonial-image"
              src={image}
              alt={`Portrait of ${name}`}
            />
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-author">
              <h3 className="name">{name}</h3>
              <p className="role">{role}</p>
            </div>
            <div className="flex-center mt-4">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < rating ? "star filled" : "star empty"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
