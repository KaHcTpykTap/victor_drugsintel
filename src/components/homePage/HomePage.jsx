
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomePageContainer } from './styles/HomePageStyles'

function HomePage() {

  let navigate = useNavigate();
  return (
    <HomePageContainer>
      <div className='hp'>
        <div className="hp-left">
          <h2>Drugs Intelligence</h2>
          <h2>Data-Driven Solutions</h2>
          <h4>
            The DI company has developed an exclusive technological platform,
            «The Compass» that aggregates unique data sets and applies manipulation,
            unification and deployment of the data to BI using AI and ML models.
          </h4>
          <button onClick={() => {navigate('contact')}}>CONTACT US</button>
        </div>
      </div>



    </HomePageContainer>
  )
}

export default HomePage