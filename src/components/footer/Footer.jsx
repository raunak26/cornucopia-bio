import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Logo + Description */}
        <div className="flex items-start gap-3">
          <img
            src="/cornucopia-logo.png" // Ensure this file exists in /public
            alt="Cornucopia Logo"
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-lg font-semibold text-primary dark:text-blue-400">Cornucopia Bio</h2>
            <p className="text-sm mt-1 dark:text-gray-300">AI-native lab automation and CRO services built for speed and scale.</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="text-md font-medium text-primary dark:text-blue-400">Explore</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-primary dark:hover:text-blue-400">Home</Link></li>
            <li><Link to="/mission" className="hover:text-primary dark:hover:text-blue-400">Mission</Link></li>
            <li><Link to="/benefits" className="hover:text-primary dark:hover:text-blue-400">Benefits</Link></li>
            <li><Link to="/contact" className="hover:text-primary dark:hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Legal / Social */}
        <div className="text-sm space-y-2">
          <p className="dark:text-gray-300">&copy; {new Date().getFullYear()} Cornucopia Biosciences</p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/company/cornucopiabio" className="hover:text-primary dark:hover:text-blue-400">LinkedIn</a>
            <a href="mailto:hello@cornucopiabio.com" className="hover:text-primary dark:hover:text-blue-400">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
