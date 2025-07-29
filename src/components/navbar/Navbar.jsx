import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <img src="/cornucopia-logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-primary dark:text-white tracking-tight">Cornucopia Bio</span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/benefits" className="hover:text-primary">Benefits</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 text-xs border border-gray-300 dark:border-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
