import React, { useState } from 'react';
import './contact_us.css';

// ✅ Correct API URL
const API_URL = process.env.REACT_APP_API_URL || "/api";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setResponseMessage("Your message has been sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-intro">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Send us a message below.</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Our Info</h3>
          <p><strong>Email:</strong> cornucopia.bio.ai@gmail.com</p>
          <p><strong>Phone:</strong> (323) 398-9379</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          <button type="submit" className="btn-submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
