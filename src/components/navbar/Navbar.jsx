import React from 'react'
import "./Navbar.css"
import Mylogo from "./logo1.jpeg"
const Navbar = ({ scrollToSection }) => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <div className = "logocontainer">
                <img src= {Mylogo} alt='' className="logo-image"/>
            </div>
            <div className="navItems">
            <button className="NavButton" onClick={() => scrollToSection('hero')}>Home</button>
            <button className="NavButton" onClick={() => scrollToSection('about')}>About</button>
            <button className="NavButton" onClick={() => scrollToSection('policy')}>Policy</button>
            <button className="NavButton" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
            <a href="https://www.fresha.com/a/simply-glam-by-ang-cape-town-20-goede-hoop-street-zr0d58aj/booking?menu=true" target="_blank" rel="noopener noreferrer">
                <button className="CTAButton">Book Now!</button>
            </a>
    
                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
