import React from "react";
import reportIcon from "../Images/report.svg";
import deviceIcon from "../Images/Labdevice.png";
import SpinningWheel from "../SpinningWheel/SpinningWheel";

const Home = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-blue-400">Cornucopia Bio</h1>
        <p className="text-xl md:text-2xl font-medium mb-6 text-gray-800 dark:text-gray-300">The AI-Native CRO</p>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed dark:text-gray-400">
          Operate lab devices remotely, skip the setup, and get results fast. Just describe your experiment — we’ll handle the rest.
        </p>
        <div className="mt-8">
          <a
            href="/services"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-12 dark:text-blue-400">What We Offer</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {/* Service: Research Reports */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center transition-colors duration-300">
              <img
                src={reportIcon}
                alt="Report"
                className="w-16 h-16 mx-auto mb-4 transition duration-300 dark:invert"
              />
              <h3 className="text-lg font-semibold text-primary mb-2 dark:text-blue-400">Research Reports</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We generate AI-driven research reports tailored to your scientific goals — complete with protocol drafts, literature validation, and summary insights.
              </p>
            </div>
            {/* Service: Device Integrations */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center transition-colors duration-300">
              <img
                src={deviceIcon}
                alt="Device"
                className="w-16 h-16 mx-auto mb-4 transition duration-300 dark:invert"
              />
              <h3 className="text-lg font-semibold text-primary mb-2 dark:text-blue-400">Device Integrations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect to real lab hardware like liquid handlers and thermal cyclers, and execute validated protocols without writing code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-xl font-medium text-primary mb-6 dark:text-blue-400">
          Built with insights from
        </h2>
        <SpinningWheel />
      </section>
    </div>
  );
};

export default Home;
