import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="/Logo.svg" alt="Cornucopia Bio" className="logo" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links (Toggled on Mobile) */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/benefits" onClick={() => setMenuOpen(false)}>Benefits</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;