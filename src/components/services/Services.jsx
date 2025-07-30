import React from "react";
import { FlaskConical, Cpu, Settings2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-20 px-6 bg-white text-black dark:bg-zinc-950 dark:text-white">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Cornucopia Bio provides high-throughput, AI-augmented wet lab services to accelerate your research from bench to insight.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20">
        <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-md transition-colors duration-300">
          <div className="flex items-center gap-4 mb-4 text-primary dark:text-blue-400">
            <FlaskConical className="w-6 h-6" />
            <h3 className="text-xl font-semibold">ELISA & qPCR Assays</h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Get results fast. We automate your ELISA and qPCR workflows — ensuring reproducibility and 1-week turnarounds.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-md transition-colors duration-300">
          <div className="flex items-center gap-4 mb-4 text-primary dark:text-blue-400">
            <Cpu className="w-6 h-6" />
            <h3 className="text-xl font-semibold">AI Workflow Planning</h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Let our agents plan your experiments — from literature triage to protocol suggestions — before a pipette is touched.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-md transition-colors duration-300">
          <div className="flex items-center gap-4 mb-4 text-primary dark:text-blue-400">
            <Settings2 className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Lab Automation Integration</h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Already own an Opentrons or Hamilton? Deploy Cornucopia's platform on-premise and let your robots run 24/7.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-md transition-colors duration-300">
          <div className="flex items-center gap-4 mb-4 text-primary dark:text-blue-400">
            <CheckCircle2 className="w-6 h-6" />
            <h3 className="text-xl font-semibold">LIMS + Reporting</h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Every experiment is tracked, versioned, and logged with clean CSVs and automated reports. Goodbye, spreadsheets.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white dark:text-white dark:bg-blue-800 rounded-xl py-10 px-6 text-center shadow-lg transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-2">Join Our Alpha Program</h3>
        <p className="text-base md:text-lg mb-6">
          We're onboarding a limited number of early users. <strong>6 spots left.</strong>
        </p>

        <a
          href="https://book.stripe.com/14A5kC1Oa6Uw45deFBbo403"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary dark:bg-gray-900 dark:text-blue-400 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          Reserve Your Spot
        </a>
      </div>

    </section>
  );
};

export default Services;
