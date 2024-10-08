import React, { useRef }  from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/heropage/Hero'
import About from "../../components/aboutpage/about" 
import Policy from "../../components/policy/policy"
import Testimoials from "../../components/Testimonials/Testimonials"
import Footer from "../../components/footer/footer"

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const policyRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'policy' && policyRef.current) {
      policyRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'testimonials' && testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={heroRef} className='Herodiv'><Hero /></div>
      <div ref={aboutRef}  className='Aboutdiv'><About /></div>
      <div ref={policyRef}  className='Policydiv'><Policy /></div>
      <div ref={testimonialsRef}  className='Testdiv'><Testimoials/></div> {/* Ensure Testimonials is correctly imported */}
      <div className='Footerdiv'><Footer/></div>
    </div>
  )
}

export default Home
