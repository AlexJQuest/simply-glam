import React from 'react';
import "./coursell.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import image1 from './WhatsApp Image 2024-07-12 at 11.14.19 AM.jpeg';
import image2 from './WhatsApp Image 2024-07-12 at 11.14.21 AM.jpeg';
import image3 from './WhatsApp Image 2024-07-12 at 11.14.22 AM (1).jpeg';
import image4 from './WhatsApp Image 2024-07-12 at 11.14.23 AM.jpeg';
import image5 from './WhatsApp Image 2024-07-12 at 11.14.24 AM.jpeg';
import image6 from './WhatsApp Image 2024-07-12 at 11.14.21 AM (1).jpeg';
import image7 from './WhatsApp Image 2024-07-12 at 11.14.22 AM.jpeg';
const CarouselComponent = () => {
    const images = [image1, image2, image3, image4, image5, image6 , image7]; // Store image paths in an array

    return (
      <div className="carousel-container">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
};

export default CarouselComponent;
