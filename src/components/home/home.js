import React, { useEffect } from "react";
import "./home.css";
import "particles.js"; // If installed via npm

const Home = () => {
  useEffect(() => {
    // Initialize particles.js
    window.particlesJS.load("particles-js", "/particlesjs-config.json", () => {
      console.log("Particles.js loaded!");
    });
  }, []);

  // Example: Hardcode logos or fetch them from an API
  const logos = [
    { src: "/images/company1.png", alt: "Company 1" },
    { src: "/images/company2.png", alt: "Company 2" },
    { src: "/images/company3.png", alt: "Company 3" },
    { src: "/images/company4.png", alt: "Company 4" },
    // ... add more as needed
  ];

  return (
    <>
      {/* Particle Background */}
      <div id="particles-js"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Cornucopia Bio</h1>
        <p className="hero-subtitle">
          We bring the research to your pocket.
        </p>
        <p className="hero-description">
          Operate lab devices from your home without the hassle of complex
          setups. Just specify your research goal, and our intelligent platform
          handles the rest!
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-wrapper">
          {/* Research Reports */}
          <div className="service-card">
            <h3>Research Reports</h3>
            <p>
              We can generate comprehensive research reports based on your
              topic of interest and run computational experiments to validate
              hypotheses before you invest in physical labs.
            </p>
          </div>
          {/* Device Integrations */}
          <div className="service-card">
            <h3>Device Integrations</h3>
            <p>
              Connect with real lab devices and seamlessly move from laptop
              simulations to automated physical experimentation—all on one
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by-section">
        <h2>Trusted by researchers at</h2>
        <div className="logos-scroller">
          <div className="logos-container">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="trusted-logo"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
