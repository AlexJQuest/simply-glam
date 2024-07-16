import React from 'react'
import "./about.css"
import myImage from "./angprof.png"

const about = () => {
  return (
    <div className= 'AboutWrapper'>
      <div className = "ImageWrapper">
        <img src={myImage} alt="" style={{ width: 'auto', height: '450px', borderRadius: '10px' }}/>
      </div>
      <div className = "AbouttextWrapper">
            <div className= "HeroHeader">
                <h1>
                      About Simply Glam
                </h1>
            </div>
            <div className = "Abouttext">
                <h2>
                Welcome to Simply Glam! My name is Angelique Lundberg, and I’m a passionate nail technician and photographer based in Bothasig. My journey into the world of beauty began with a love for nail art, and I’ve dedicated myself to helping women express their unique styles through beautifully crafted nails.

                At Simply Glam, I strive to create a welcoming atmosphere where every client can feel empowered and beautiful. My goal is to fulfill all your nail and beauty needs, ensuring that you leave with a smile and a fresh sense of confidence.

                With a keen eye for detail and a commitment to exceptional service, I offer a range of nail art designs and beauty treatments tailored to each individual. Whether you’re looking for something classic or bold, I’m here to bring your vision to life.
                Join me on this exciting journey of beauty and creativity, and let’s make your nails a true reflection of you!
                </h2>
            </div>
      </div>
    </div>
  )
}

export default about
