import React from 'react'
import "./Hero.css"

const Hero = () => {


  return (
    <div className = "Hero" background>
        <div className= "HeroContainer">
                <h1 className='HeroTitle'>
                    Simply Glam
                </h1>
                <h2 className='Heroslogan'>
                    Nail Your Style with Simply Glam!
                </h2>
                <a href="https://www.fresha.com/a/simply-glam-by-ang-cape-town-20-goede-hoop-street-zr0d58aj/booking?menu=true" target="_blank" rel="noopener noreferrer">
                        <button className = "CTAButton1" > Book Now!</button>
                </a>
                
        </div>
    </div>
  )
}

export default Hero
