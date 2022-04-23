import React from 'react'
import { VisionContainer } from "./styles/VisionStyles"
import img1 from '../../images/vision_1.jpg';
import img2 from '../../images/vision_2.jpg';
import img3 from '../../images/vision_3.jpg';


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
      <div className="v-overview">
        <div className="v-vision-left">
          <img src={img2} alt='overview'></img>
        </div>
        <div className="v-vision-right">
          <h2>Overview</h2>
          <p>
            - Our unique platform allows us to extract all relevant Data identifying the most lucrative data set or article using advance technologies.
          </p>
          <p>
            - Collect historical data, risk factors and causes data using ML allows the model to predict prevalence values based on systematic research analysis validated by designated scientists.
          </p>
          <p>
            - Monitor markets and collect real-time intelligence and Rare Diseases Data.
          </p>
          <p>
            - Making Data-driven decisions and creating business opportunities.
          </p>
        </div>
      </div>
      <div className="v-vision">
        <div className="v-vision-left">
          <img src={img3} alt='vision'></img>
        </div>
        <div className="v-vision-right">
          <h2>The Compass</h2>
          <p>
            The compass essence is to guide orphan drugs companies towards excellent launch of their orphan drugs, based on the orphan drug 6 pillars of success methodology. The Compass providing eagle eye view of the orphan drug market opportunities in 65 countries and counting, with a mission of answering unmet needs for patients and their caregivers dealing with rare disease.
          </p>
        </div>
      </div>
    </VisionContainer>
  )
}

export default Vision