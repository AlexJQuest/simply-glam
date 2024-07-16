import React from 'react'
import "./Testimonials.css"
import CarouselComponent from "../../components/Coursell/coursell"
const Test = () => {
  return (
    <div className = "TestWrapper">
          <div className = "TestHeadWrapper">
              <h1>
                Testimonials
              </h1>
              <br>
              </br>
          </div>
          <div className = "CoureselWrapper">
              <CarouselComponent />
          </div>
    </div>
  )
}

export default Test
