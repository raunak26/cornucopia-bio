import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      {/* Hero / Intro Section */}
      <section className="mission-hero">
        <h1>Our Mission</h1>
        <p>
          We’ve spoken with countless scientists and heard the same refrain: 
          <strong> research is slow and demands collaboration.</strong> How can we 
          possibly fix such a monumental challenge?
        </p>
      </section>

      {/* Main Content Section */}
      <section className="mission-content">
        {/* The Challenge */}
        <div className="mission-text-block">
          <h2>The Challenge</h2>
          <p>
            Our team has used automation to accelerate experiments, but we’ve 
            discovered a problem: not everyone can simply purchase a 
            Hamilton or RPA machine and magically streamline their workflow. 
            You typically need <strong>an experienced coder</strong> or a 
            specialist familiar with liquid handling.
          </p>
          <p>
            Add to that the fact that <strong>ideation takes time</strong>, 
            as there’s a vast amount of scientific literature to comb through 
            before you can even start experimenting.
          </p>
        </div>

        {/* Where We Come In */}
        <div className="mission-text-block">
          <h2>Where We Come In</h2>
          <p>
            That’s where <strong>Cornucopia</strong> changes the game. 
            We provide device integrations <strong>without the need to write code</strong>. 
            Our agents handle the <em>ideation</em> by sifting 
            through relevant literature, designing protocols, and even 
            executing the steps on compatible lab devices. You just tell 
            us your <strong>research goal</strong>, and our platform manages the rest.
          </p>
        </div>

        {/* GLP-1 Paper Snippet */}
        <div className="mission-text-block snippet-block">
          <h2>Real-World Example: GLP-1</h2>
          <p>
            We’ve tested our approach on some of the hottest topics in science—like
            <strong> GLP-1</strong>. Our agents rapidly reviewed current publications, 
            planned experiments, and ran computational experiments to produce actionable 
            results, all without requiring specialized coding skills.
          </p>
          <blockquote className="paper-quote">
            <a href="/file.pdf" target="_blank" rel="noopener noreferrer" className="paper-button">
              Click here to check out our paper
            </a>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mission-cta">
        <h2>Ready to Bring Cornucopia to Your Lab?</h2>
        <p>
          Get in touch to see how our agent-driven platform can revolutionize 
          your research. Experience faster experiments, automated ideation, 
          and seamless lab integration—no code required.
        </p>
        <a href="/contact" className="cta-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Mission;
