import React from "react";
import "./SpinningWheel.css";

const logos = [
  { name: "Amgen", src: "/logos/amgen.svg" },
  { name: "Merck", src: "/logos/merck.svg" },
  { name: "UC Davis", src: "/logos/ucdavis.svg" },
];

const SpinningWheel = () => {
  return (
    <section className="logo-section">
      <div className="logo-container">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="logo-item"
            id={logo.name === "Merck" ? "merck-logo" : undefined}
          >
            <img src={logo.src} alt={`${logo.name} logo`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpinningWheel;
