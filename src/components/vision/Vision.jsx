import React from 'react'
import { VisionContainer } from "./styles/VisionStyles"
import img1 from '../../images/vision_1.jpg';


const Vision = () => {
  return (

    <VisionContainer>
      <div className="v-title">
        <h2>Vision And Overview</h2>
        <span></span>
      </div>
      <div className="v-vision">
        <div className="v-vision-left">
          <img src={img1} alt='vision'></img>
        </div>
        <div className="v-vision-right">
          <h2>Vision</h2>
          <p>
            Our company’s vision and focus are based on Dr. Shlomo Sadoun’s thesis “Six pillar of successful launches of orphan drugs globally" utilizing cutting edge technologies to support smart business decisions that will lead to better healthcare solutions.
          </p>
        </div>
      </div>
{/*       <div className="v-overviev">
        overview
      </div>
      <div className="v-comp">
        Compass
      </div> */}
    </VisionContainer>
  )
}

export default Vision