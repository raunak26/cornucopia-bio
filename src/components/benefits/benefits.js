import React from 'react';
import './benefits.css';

const Benefits = () => {
  return (
    <div className="benefits-container">

      {/* Intro */}
      <section className="benefits-intro">
        <h1>Faster Drug Discovery</h1>
        <p>
          Traditional drug discovery is long and complex. Researchers start with <strong>ideation</strong>,
          run <strong>computational validation</strong>, move on to <strong>in vitro</strong> experiments,
          then <strong>in vivo</strong> validation (preclinical), and only then head into clinical trials.
        </p>
        <p>
          But what if you could skip all that time-consuming setup and jump straight 
          to <strong>in vivo</strong> experimentation, with all earlier steps handled 
          <em> automatically</em>?
        </p>
      </section>

      {/* Timeline Comparison */}
      <section className="timeline-section">
        <div className="timeline-wrapper">
          
          {/* Traditional Timeline */}
          <div className="timeline traditional">
            <h2>Traditional Approach</h2>
            <div className="timeline-steps">
              <div className="timeline-step">
                <span>Ideation</span>
              </div>
              <div className="timeline-step">
                <span>Computational Validation</span>
              </div>
              <div className="timeline-step">
                <span>In Vitro</span>
              </div>
              <div className="timeline-step">
                <span>In Vivo (Preclinical)</span>
              </div>
              <div className="timeline-step">
                <span>Clinical Studies</span>
              </div>
            </div>
          </div>
          
          {/* Cornucopia Timeline */}
          <div className="timeline cornucopia">
            <h2>Cornucopia Approach</h2>
            <div className="timeline-steps">
              <div className="timeline-step earlier-steps">
                <span>
                  <strong>Auto Ideation</strong><br />
                  <small>Agents &amp; Computation</small>
                </span>
              </div>
              <div className="timeline-step skip-label">
                <span>All Early Steps<br />Handled Automatically</span>
              </div>
              <div className="timeline-step highlight">
                <span>In Vivo (Preclinical)</span>
              </div>
              <div className="timeline-step">
                <span>Clinical Studies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="benefits-highlights">
        <h2>Why Researchers Choose Cornucopia</h2>
        
        <div className="benefit-point">
          <h3>24/7 Scientist Workforce</h3>
          <p>
            Our platform offers a dedicated team of scientists and automation specialists 
            working round the clock—at costs <strong>cheaper than offshore CROs</strong>.
            You get results faster without sacrificing quality.
          </p>
        </div>

        <div className="benefit-point">
          <h3>Pipetting Solved</h3>
          <p>
            Manual pipetting is slow, error-prone, and tedious. Cornucopia’s robotic integrations 
            eliminate human error and <strong>supercharge throughput</strong>, letting you 
            test more conditions in less time.
          </p>
        </div>

        <div className="benefit-point">
          <h3>Agent-Driven Early Stages</h3>
          <p>
            Our intelligent agents handle ideation and computational validation 
            behind the scenes. Just define your goal, and Cornucopia takes care 
            of literature reviews, protocol generation, and verifying feasibility, 
            so you can skip to the meaningful <em>in vivo</em> work.
          </p>
        </div>

      </section>
      
    </div>
  );
};

export default Benefits;
