import React, { useState } from 'react';
import './contactPage.css'; // Import the new CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.contactNumber || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    setIsLoading(true);

    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      message: '',
    });

    setIsLoading(false);
    setTimeout(() => setFormStatus(''), 3000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      message: '',
    });
    setFormStatus('');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-form-container">
        {/* Video Section */}
        <div className="video-section">
          <h2 className="text-2xl mb-4 text-gray-700">Watch Our Introduction</h2>
          <video controls className="video">
            <source src="../Images/coverr-first-floor-of-a-house-164-1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          {formStatus && (
            <div className={`${
              formStatus === 'success' ? 'success-message' : 'error-message'
            }`}>
              {formStatus === 'success' ? 'Message sent successfully!' : 'Please fill out all fields!'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input"
              required
            />
            <input
              type="tel"
              placeholder="Your Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="input"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="textarea"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className={`button-submit ${isLoading ? 'bg-gray-400 cursor-wait' : ''}`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="button-reset"
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      {/* Map & Contact Info */}
      <div className="mt-12">
        <h2 className="text-2xl text-gray-800 mb-4">Visit Us</h2>
        <div className="flex flex-wrap gap-8">
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
              className="map-frame"
            ></iframe>
          </div>

          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-text">123 Real Estate Ave, Dream City</p>
            <p className="contact-info-text">contact@realestate.com</p>
            <p className="contact-info-text">+1 234 567 890</p>
            <p className="contact-info-text">Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
