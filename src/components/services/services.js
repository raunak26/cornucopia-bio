import React from "react";
import { Link } from "react-router-dom";
import "./services.css"; // reuse or extend your existing CSS

const Services = () => (
  <div className="services-page">
    {/* Hero */}
    <section className="hero-section">
      <h1>Our Services</h1>
      <p>
        Robotic assays, AI‑written protocols, and on‑prem automation — now
        available in our early‑access alpha.
      </p>
    </section>

    {/* Assay Services */}
    <section className="services-list">
      {/* ELISA */}
      <div className="service-item">
        <h2>Automated ELISA</h2>
        <p>
          Reduce your sample volume by <strong>10×</strong> without sacrificing
          sensitivity. We support multiplexed ELISA and full Luminex® bead‑based
          workflows, letting you extract more data from every microlitre.
        </p>
        <p className="turnaround">
          <span className="highlight">1 Week Turnaround</span>
        </p>
      </div>

      {/* qPCR / dPCR / ddPCR */}
      <div className="service-item">
        <h2>qPCR • dPCR • ddPCR</h2>
        <p>
          Our agent stack can design optimal primers in‑house or run with your
          existing primer sets. All workflows are fully automated across
          qPCR, dPCR, and ddPCR platforms for consistent, low‑variance results.
        </p>
        <p className="turnaround">
          <span className="highlight">1 Week Turnaround</span>
        </p>
      </div>

      {/* Multiomics */}
      <div className="service-item">
        <h2>Multiomics Workflows</h2>
        <p>
          End‑to‑end automation for RNA‑seq, spatial omics, single‑cell and
          single‑nuclei prep, plus AI‑powered image segmentation on pre‑stained
          or in‑house‑stained samples.
        </p>
        <p className="turnaround">
          <span className="highlight">1 Week Turnaround</span>
        </p>
      </div>
    </section>

    {/* Professional Services */}
    <section className="services-list">
      {/* On‑Prem Automation Revitalization */}
      <div className="service-item">
        <h2>On‑Prem Automation Revitalization</h2>
        <p>
          Turn your “zombie” liquid handlers back to life. We consult on site
          usage strategy, script development, and best‑practice workflows for
          Hamilton, Agilent, Opentrons, and other major platforms.
        </p>
        <p>
          <strong>Flat fee:</strong> <span className="price">US$5,000 </span> (hardware maintenance or parts
          replacement not included).
        </p>
      </div>

      {/* NLP‑Driven Protocol Interface */}
      <div className="service-item">
        <h2>Natural‑Language Protocol Interface</h2>
        <p>
          Say goodbye to rigid GUIs. We install a chat‑based layer on top of any
          liquid handler, so scientists can run complex methods with plain
          English. Plug‑and‑play support for Hamilton, Opentrons, and Agilent
          Bravo.
        </p>
        <p>
          <strong>Flat fee:</strong> <span className="price">US$3,500</span> (excludes ongoing maintenance and
          data‑integration work).
        </p>
      </div>

      {/* Sample Tracking */}
      <div className="service-item">
        <h2>End‑to‑End Sample Tracking</h2>
        <p>
          Outsourcing to external CROs? We act as your single point of contact,
          handle all vendor communication, and give you an Amazon‑style live
          tracker showing where each sample is in the workflow and when you’ll
          receive results.
        </p>
        <p>
          <strong>Project fee:</strong> from <span className="price">US$2,000</span> per engagement.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <h2>Join Our Alpha</h2>
      <p>
        Sign up today to automate your assays or revive your on‑prem robotics.
        CornucopiaBio — the future of CROs.
      </p>
      <Link to="/contact" className="cta-button" onClick={() => window.scrollTo(0, 0)}>
        Apply for Alpha Access
      </Link>
    </section>
  </div>
);

export default Services;
