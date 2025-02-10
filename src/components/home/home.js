import React, { useEffect, useState } from "react";
import "./home.css";
import "particles.js"; // If installed via npm
import reportIcon from "../Images/report.svg";
import deviceIcon from "../Images/Labdevice.png";

// 1) Import your SpinningWheel
import SpinningWheel from "../SpinningWheel/SpinningWheel"; // adjust path as needed

const Home = () => {
  // State for toggling the description display on click
  const [activeReport, setActiveReport] = useState(false);
  const [activeDevice, setActiveDevice] = useState(false);

  useEffect(() => {
    // Initialize particles.js
    window.particlesJS.load("particles-js", "/particlesjs-config.json", () => {
      console.log("Particles.js loaded!");
    });
  }, []);

  return (
    <>
      {/* Particle Background */}
      <div id="particles-js"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Cornucopia Bio</h1>
        <p className="hero-subtitle">0 to cure</p>
        <p className="hero-description">
          Operate lab devices from your home without the hassle of complex setups. <br />
          Just specify your research goal, and our platform handles the rest!
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-wrapper">
          {/* Research Reports */}
          <div className="service-card" onClick={() => setActiveReport(!activeReport)}>
            <h3>Research Reports</h3>
            <div className={`service-content ${activeReport ? "active" : ""}`}>
              <img
                src={reportIcon}
                alt="Paper Icon"
                className="service-icon"
              />
              <p className="service-description">
                We generate comprehensive research reports based on your topic
                of interest and run computational experiments to validate hypotheses
                before you invest in physical labs.
              </p>
            </div>
          </div>

          {/* Device Integrations */}
          <div className="service-card" onClick={() => setActiveDevice(!activeDevice)}>
            <h3>Device Integrations</h3>
            <div className={`service-content ${activeDevice ? "active" : ""}`}>
              <img
                src={deviceIcon}
                alt="Device Icon"
                className="service-icon"
              />
              <p className="service-description">
                Connect with real lab devices and transition from computational
                simulations to automated physical experimentation in one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by-section">
        <h2>Trusted by researchers at</h2>
        <SpinningWheel />
      </section>
    </>
  );
};

export default Home;
