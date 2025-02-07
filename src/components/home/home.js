import React, { useEffect } from "react";
import "./home.css";
import particlesJS from "particles.js"; // Import particles.js

const Home = () => {
  useEffect(() => {
    // Load particles.js configuration
    window.particlesJS.load("particles-js", "/particlesjs-config.json", function () {
      console.log("Particles.js loaded!");
    });
  }, []);

  return (
    <React.Fragment>
      {/* Particle Background */}
      <div id="particles-js"></div>

      {/* Home Content */}
      <div className="home">
        <p>
          Your personalized science companion.<br />
          Empowering breakthroughs. <br />
          Right in your pocket. <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
