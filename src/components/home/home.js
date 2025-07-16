import React from "react";
import heroImage from "../Images/petri.jpg";
import SpinningWheel from "../SpinningWheel/SpinningWheel";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-container">
        {/* Image */}
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Gloved hands holding petri dishes"
            className="hero-image"
            loading="eager"
          />
        </div>

        {/* Copy */}
        <div className="hero-copy">
          <h1 className="hero-title">
            The future of biomedical research
            <br className="hidden-md" />
            starts with AI
          </h1>
          <p className="hero-description">
            Operate lab devices from your home without the hassle of complex
            setups. Just specify your research goal, and our platform handles the
            rest!
          </p>
          <a href="contact" className="cta-btn">
            Get in touch
          </a>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by-section">
        <h2>Trusted by researchers at</h2>
        <SpinningWheel />
      </section>
    </>
  );
}
