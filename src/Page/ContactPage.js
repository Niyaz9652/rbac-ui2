import React, { useState } from 'react';
import './contactPage.css';

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
    <div className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <h1 className="text-5xl font-bold text-center text-black-600 mb-12">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Watch Our Introduction</h2>
          <video
            controls
            className="rounded-lg shadow-lg w-full"
          >
            <source src="../Images/coverr-first-floor-of-a-house-164-1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          {formStatus && (
            <div
              className={`text-center text-lg font-medium py-2 mb-4 rounded ${
                formStatus === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
              }`}
            >
              {formStatus === 'success' ? 'Message sent successfully!' : 'Please fill out all fields!'}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Your Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className={`py-3 px-6 rounded-md text-white font-bold ${
                isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="py-3 px-6 rounded-md bg-gray-200 text-gray-700 font-bold hover:bg-gray-300"
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      {/* Map & Contact Info */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center text-black-600 mb-10">Visit Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Section */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345092196!2d144.95373531561445!3d-37.81720974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e4f80dd92a6e!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633386958643!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
              title="Location Map"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <p className="mb-2 text-gray-700">
              <strong>Address:</strong> 123 Real Estate Ave, Dream City
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Email:</strong> contact@realestate.com
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-gray-700">
              <strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
