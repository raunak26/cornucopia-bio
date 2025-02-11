import React, { useState } from 'react';
import './contact_us.css';

const API_URL = process.env.REACT_APP_API_URL || ""; // ✅ Use environment variable for API URL

const ContactUs = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted

    try {
      // ✅ Use API_URL for flexible deployment
      const res = await fetch(`${API_URL}/send`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // ✅ Ensure response is JSON before parsing
      if (!res.ok) {
        const errorMessage = res.headers.get("Content-Type")?.includes("application/json")
          ? (await res.json()).message
          : "Failed to send message. Please try again.";
        setResponseMessage(errorMessage);
      } else {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Stop loading when request is completed
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-intro">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Please reach out using any of the 
          details below, or send us a message using the form.
        </p>
      </div>

      <div className="contact-content">
        {/* Left Column: Contact Info */}
        <div className="contact-info">
          <h3>Our Info</h3>
          <p><strong>Email:</strong> cornucopia.bio.ai@gmail.com</p>
          <p><strong>Phone:</strong> (323) 398-9379</p>
        </div>

        {/* Right Column: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          <label htmlFor="name">Name</label>
          <input 
            id="name"
            name="name"
            type="text" 
            placeholder="John Doe" 
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            name="email"
            type="email" 
            placeholder="john@example.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message"
            rows="5" 
            placeholder="Type your message here..." 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {/* Display response message */}
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;