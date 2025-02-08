import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Cornucopia Bio" className="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        {/*
          - "/" => Home+Mission combined
          - "/benefits" => separate page
          - "/about" => separate page
          - "/contact" => separate page
        */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/benefits">Benefits</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
