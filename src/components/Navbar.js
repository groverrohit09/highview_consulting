// src/components/Navbar.js
import React, { useState } from "react";

import { Link, NavLink } from 'react-router-dom';  // React Router for navigation

import logo from '../assets/logo.png'; // Import logo
import navbar_button1 from '../assets/buttons/Services_Button.png';
import navbar_button2 from '../assets/buttons/About_Us_Button.png';
import navbar_button3 from '../assets/buttons/Get_In_Touch_Button.png';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (<nav className="App-header">
    <Link to="/" >
      <img src={logo} alt="Logo" className="App-logo" />
    </Link>

    <div className="hamburger" onClick={toggleMenu}>
      <div className={`bar ${isOpen ? "rotate-top" : ""}`}></div>
      <div className={`bar ${isOpen ? "hide" : ""}`}></div>
      <div className={`bar ${isOpen ? "rotate-bottom" : ""}`}></div>
    </div>

    {/* Navigation Links */}
    <div className={`nav-links ${isOpen ? "open" : ""}`}>
      <a href="/" className="nav-link-mob">Home</a>
      <a href="/services" className="nav-link-mob">Services</a>
      <a href="/about" className="nav-link-mob">About</a>
      <a href="/contact" className="nav-link-mob">Contact</a>
    </div>

    <div className='navbar-buttons-group'>




      <NavLink to="/services" className="nav-link" activeclassname="active">
        <img src={navbar_button1} alt="Services-Button" className="navbar-button" />
      </NavLink>
      <NavLink to="/about" className="nav-link" activeclassname="active">
        <img src={navbar_button2} alt="About-Us-Button" className="navbar-button" />
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeclassname="active">
        <img src={navbar_button3} alt="Get-In-Touch-Button" className="navbar-button" />
      </NavLink>
    </div>
  </nav>
  );
}

export default Navbar;