import React from 'react'
import "./footer.css"
import insta from "./instagram (1).svg"
import email from "./email.svg"
import whatsapp from "./whatsapp.svg"
import phone from "./phone.svg"
import logo from "../../components/navbar/logo1.jpeg"

const footer = () => {
  return (
    <div className = "footerwrapper">

        <img className="logo-image" src = {logo} alt = "" style={{ width: 'auto', height: '60px', borderRadius: '10px' , marginRight: '50px'}}/>


        <h2 className = "footertext">
                © 2024 - Simply Glam. All Rights Reserved.
        </h2>
        <span className = "Iconholders">
            <a href="https://www.instagram.com/simplyglam.by.ang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" style={{ width: 'auto', height: '40px', borderRadius: '10px' , marginRight: '5px' }}/>
            </a>
            <a href="https://wa.me/c/27612481698" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="" style={{ width: 'auto', height: '40px', borderRadius: '10px' , marginRight: '5px' }}/>
            </a>
            <a href="tel:+27612481698" target="_blank" rel="noopener noreferrer">
            <img src={phone} alt="" style={{ width: 'auto', height: '40px', borderRadius: '10px' , marginRight: '5px' }}/>
            </a>
            <a href="mailto:lundberg.photography039@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="" style={{ width: 'auto', height: '40px', borderRadius: '10px' , marginRight: '5px' }}/>
            </a>
        </span>
    </div>
  )
}

export default footer
