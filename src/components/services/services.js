import React from "react";
import { Link } from "react-router-dom";
import "./services.css"; // reuse or extend your existing CSS

const Services = () => (
  <div className="services-page">
    {/* Hero */}
    <section>
      <h5>.       .</h5>
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
        <stripe-buy-button
          buy-button-id="buy_btn_1RkHiqBwKVDwg9HZcXcfRvUE"
          publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
        >
        </stripe-buy-button>
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
        <stripe-buy-button
          buy-button-id="buy_btn_1RkHiqBwKVDwg9HZcXcfRvUE"
          publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
        >
        </stripe-buy-button>
      </div>

      {/* Multiomics */}
      <div className="service-item">
        <h2>Multiomics Workflows</h2>
        <p>
          End‑to‑end automation for RNA‑seq, spatial omics, single‑cell and single‑nuclei prep, 
          plus batch tracking support, and AI‑powered image segmentation on pre‑stained or unstained samples.
        </p>
        <p className="turnaround">
          <span className="highlight">1 Week Turnaround</span>
        </p>
        <stripe-buy-button
          buy-button-id="buy_btn_1RkHiqBwKVDwg9HZcXcfRvUE"
          publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
        >
        </stripe-buy-button>
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
          <strong>Flat fee:</strong> <span className="price">US$5,000 </span> (excludes hardware maintenance & parts
          replacement)
        </p>
        {/* BUY BUTTON */}
        <stripe-buy-button
          buy-button-id="buy_btn_1RkAuNBwKVDwg9HZCKcRQXKc"
          publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
        />
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
          data‑integration)
        </p>
        {/* BUY BUTTON */}
        <stripe-buy-button
          buy-button-id="buy_btn_1RkAtJBwKVDwg9HZgkBj8bmw"
          publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
        />
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
          <strong>Project fee:</strong> <span className="price">US$2,000</span> per engagement (includes live tracking & report delivery)
        </p>
        {/* BUY BUTTON */}
        <stripe-buy-button
          buy-button-id="buy_btn_1RkB0wBwKVDwg9HZiB1CS0rS"
          publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
        />
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <h2>Join Our Alpha</h2>
      <p>
        Sign up today to automate your assays or revive your robotics.
      </p>
      <stripe-buy-button
        buy-button-id="buy_btn_1RkHiqBwKVDwg9HZcXcfRvUE"
        publishable-key="pk_live_51Qu1DPBwKVDwg9HZWrqsj3yvMZ126yG9gRvXhzZj7rwlTMIdJSxou8y5WnDow1NN20Oq4QEPs0ytIHIVCCl6DQl900k64Hdcgk"
      />
      <p className="mt-2 text-sm font-medium text-red-600">
      Only <span className="underline">6&nbsp;spots&nbsp;left</span>!
      </p>
    </section>
  </div>
);

export default Services;
