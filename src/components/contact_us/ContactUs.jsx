import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    consentToCommunicate: false,
    consentToProcess: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const portalId = "48423791";
    const formId = "4d5bd9a7-d69c-45da-a777-ce0122f99e4a";
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: [
        { name: "firstname", value: formData.firstName },
        { name: "lastname", value: formData.lastName },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phoneNumber },
        { name: "message", value: formData.message },
        { name: "LEGAL_CONSENT.communicationConsent", value: formData.consentToCommunicate ? "true" : "false" },
        { name: "LEGAL_CONSENT.processingConsent", value: formData.consentToProcess ? "true" : "false" },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
          consentToCommunicate: false,
          consentToProcess: false,
        });
      } else {
        const responseBody = await response.json();
        console.error("HubSpot error:", responseBody);
        setError("There was a problem submitting the form.");
      }
    } catch (err) {
      console.error("Form submission error", err);
      setError("There was a problem submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 text-black dark:text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-8 text-center">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-xl transition"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              id="consentToCommunicate"
              checked={formData.consentToCommunicate}
              onChange={handleChange}
              required
            />
            I agree to receive communications.
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              id="consentToProcess"
              checked={formData.consentToProcess}
              onChange={handleChange}
              required
            />
            I agree to the processing of my personal data.
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {isSubmitted && (
            <p className="text-green-600 dark:text-green-400 mt-2 text-sm">
              Thanks! We’ll be in touch.
            </p>
          )}
          {error && (
            <p className="text-red-600 dark:text-red-400 mt-2 text-sm">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
