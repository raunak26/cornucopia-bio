import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="py-20 px-6 bg-white text-black dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-6 dark:text-blue-400">Our Mission</h1>
        <p className="text-gray-700 text-lg mb-12 dark:text-gray-300">
          We've talked to countless scientists. They all say the same thing: <strong>research is slow</strong>, collaboration is hard, and setups are painful. So we built Cornucopia to change that.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Left Feature */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-2 dark:text-blue-400">The Problem</h2>
          <p className="text-gray-600 leading-relaxed dark:text-gray-300">
            Automation helps, but most scientists can’t just buy a liquid handler and go. You need a coder. You need specialized scripting. You need protocols. And before that? You need a full literature review to even know what to run.
          </p>
        </div>

        {/* Right Feature */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-2 dark:text-blue-400">Our Solution</h2>
          <p className="text-gray-600 leading-relaxed dark:text-gray-300">
            Cornucopia makes experimentation seamless. Just tell us your goal — our agents draft protocols, run validations, and even execute on integrated lab hardware. No code. No hassle. Fully validated outputs in record time.
          </p>
        </div>
      </div>

      {/* Paper Snippet */}
      <div className="max-w-4xl mx-auto mt-16 bg-gray-50 border-l-4 border-primary p-6 rounded dark:bg-gray-800 dark:border-blue-400">
        <h3 className="text-lg font-semibold text-primary mb-2 dark:text-blue-400">
          Agents That Skip the Busywork
        </h3>
        <p className="text-gray-600 mb-4 dark:text-gray-300">
          Our agents wrote an entire framework on how to skip redundant wet lab steps and still get reproducible results — without sacrificing validation or integrity.
        </p>
        <a
          href="/paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          Read the Paper
        </a>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          Bring Cornucopia to Your Lab
        </Link>
      </div>
    </div>
  );
};

export default Mission;
