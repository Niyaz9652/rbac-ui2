import React, { useState } from 'react';
import './contactPage.css'; // Import the Tailwind custom styles

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
    console.log('Form submitted', formData);

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
    <div className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="contact-video-section">
          <h2 className="text-xl font-bold mb-4">Real Estate Video</h2>
          <video controls className="contact-video">
            <source src="../Images/coverr-first-floor-of-a-house-164-1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        </div>

        <div className="contact-form-container">
          {formStatus && (
            <div
              className={`form-status ${
                formStatus === 'success' ? 'form-status-success' : 'form-status-error'
              }`}
            >
              {formStatus === 'success'
                ? 'Message sent successfully!'
                : 'Please fill out all fields!'}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="contact-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="contact-input"
              required
            />
            <input
              type="tel"
              placeholder="Your Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="contact-input"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="contact-textarea"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className={`submit-button ${
                isLoading ? 'submit-button-loading' : 'submit-button-enabled'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="reset-button"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
