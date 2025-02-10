import React from 'react';
import './contact_us.css';

{/* The ContactUs component */}
const ContactUs = () => {
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
        <form className="contact-form">
          <h3>Send a Message</h3>

          <label htmlFor="name">Name</label>
          <input 
            id="name"
            type="text" 
            placeholder="John Doe" 
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="john@example.com" 
            required 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder="Type your message here..." 
            required
          ></textarea>

          <button type="submit" className="btn-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
