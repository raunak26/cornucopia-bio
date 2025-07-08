import React, { useState } from 'react';
import './contact_us.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    consentToCommunicate: false,
    consentToProcess: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const portalId = '48423791';
    const formId = '4d5bd9a7-d69c-45da-a777-ce0122f99e4a';

    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: [
        {
          name: 'firstname',
          value: formData.firstName
        },
        {
          name: 'lastname',
          value: formData.lastName
        },
        {
          name: 'email',
          value: formData.email
        },
        {
          name: 'phone',
          value: formData.phoneNumber
        },
        {
          name: 'message',
          value: formData.message
        },
        {
          name: 'LEGAL_CONSENT.communicationConsent',
          value: formData.consentToCommunicate ? 'true' : 'false'
        },
        {
          name: 'LEGAL_CONSENT.processingConsent',
          value: formData.consentToProcess ? 'true' : 'false'
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
          consentToCommunicate: false,
          consentToProcess: false
        });
      } else {
        const responseBody = await response.json();
        console.error('HubSpot error:', responseBody);
        setError('There was a problem submitting the form.');
      }
    } catch (err) {
      console.error('Form submission error', err);
      setError('There was a problem submitting the form.');
    } finally {
      setIsSubmitting(false);
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
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@cornucopiabio.com" className="text-black no-underline hover:underline">
              hello@cornucopiabio.com
            </a>
        </p>
          <p><strong>Phone:</strong> (323) 398-9379</p>
        </div>

        {/* Right Column: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number (optional)</label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              id="consentToCommunicate"
              checked={formData.consentToCommunicate}
              onChange={handleChange}
              required
            />
            I agree to receive communications.
          </label>

          <label>
            <input
              type="checkbox"
              id="consentToProcess"
              checked={formData.consentToProcess}
              onChange={handleChange}
              required
            />
            I agree to the processing of my personal data.
          </label>

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {isSubmitted && (
            <p style={{ color: 'green', marginTop: '1rem' }}>
              Thank you! We'll get back to you shortly.
            </p>
          )}
          {error && (
            <p style={{ color: 'red', marginTop: '1rem' }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
