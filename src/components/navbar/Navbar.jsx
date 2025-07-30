import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <img src="/cornucopia-logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-primary dark:text-white tracking-tight transition-colors duration-300">Cornucopia Bio</span>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            // X icon
            <svg className="w-6 h-6 text-gray-700 dark:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6 text-gray-700 dark:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav links desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-primary transition-colors duration-300">Home</Link>
          <Link to="/services" className="hover:text-primary transition-colors duration-300">Services</Link>
          <Link to="/benefits" className="hover:text-primary transition-colors duration-300">Benefits</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 text-xs border border-gray-300 dark:border-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white transition-colors duration-300"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-700 shadow-md px-6 py-6 backdrop-blur-md space-y-7 text-base font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 z-40 animate-fade-in">
          <div className="mb-2 text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">Navigate</div>
          <Link to="/" className="block hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="block hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/benefits" className="block hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>Benefits</Link>
          <Link to="/contact" className="block hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => { setDarkMode(!darkMode); setMenuOpen(false); }}
            className="w-full mt-8 px-0 py-0"
          >
            <span className="block w-full py-3 px-0 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white font-semibold text-sm text-center hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors duration-300">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
