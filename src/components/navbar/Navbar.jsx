import React, { useState } from 'react';
import './Navbar.css';
import Mylogo from './logo1.jpeg';
import MenuIcon from './menu-icon.png'; // Import your menu icon

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logocontainer">
          <img src={Mylogo} alt="Logo" className="logo-image" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" className="menu-icon-image" />
        </div>
        <div className={`navItems ${menuOpen ? 'open' : ''}`}>
          <button className="NavButton" onClick={() => scrollToSection('hero')}>Home</button>
          <button className="NavButton" onClick={() => scrollToSection('about')}>About</button>
          <button className="NavButton" onClick={() => scrollToSection('policy')}>Policy</button>
          <button className="NavButton" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          <a href="https://www.fresha.com/a/simply-glam-by-ang-cape-town-20-goede-hoop-street-zr0d58aj/booking?menu=true" target="_blank" rel="noopener noreferrer">
            <button className="CTAButton">Book Now!</button>
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="mobileMenu">
          <button className="NavButton" onClick={() => scrollToSection('hero')}>Home</button>
          <button className="NavButton" onClick={() => scrollToSection('about')}>About</button>
          <button className="NavButton" onClick={() => scrollToSection('policy')}>Policy</button>
          <button className="NavButton" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          <a href="https://www.fresha.com/a/simply-glam-by-ang-cape-town-20-goede-hoop-street-zr0d58aj/booking?menu=true" target="_blank" rel="noopener noreferrer">
            <button className="CTAButton">Book Now!</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
