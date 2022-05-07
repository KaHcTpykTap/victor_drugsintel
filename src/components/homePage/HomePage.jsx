
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { contact } from '../utils/constants';
import { HomePageContainer } from './styles/HomePageStyles';
import Grid from '@mui/material/Grid';

function HomePage() {

  let navigate = useNavigate();
  return (
    <HomePageContainer>
      <div className='hp'>
        <Grid container spacing={12} /* sx={{ justifyContent: 'center' }} */>
          <Grid item xs={12} sm={10} md={6} >
            <h2>Drugs Intelligence</h2>
            <h2>Data-Driven Solutions</h2>
            <h4>
              The DI company has developed an exclusive technological platform,
              «The Compass» that aggregates unique data sets and applies manipulation,
              unification and deployment of the data to BI using AI and ML models.
            </h4>
            <button onClick={() => { navigate(contact) }}>CONTACT US</button>
          </Grid>
        </Grid>
        {/*         <div className="hp-left">
          <h2>Drugs Intelligence</h2>
          <h2>Data-Driven Solutions</h2>
          <h4>
            The DI company has developed an exclusive technological platform,
            «The Compass» that aggregates unique data sets and applies manipulation,
            unification and deployment of the data to BI using AI and ML models.
          </h4>
          <button onClick={() => { navigate(contact) }}>CONTACT US</button>
        </div> */}
      </div>



    </HomePageContainer>
  )
}

export default HomePage