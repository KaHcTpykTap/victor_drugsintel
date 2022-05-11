
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';
import { contact } from '../utils/constants';
import { HomePageContainer } from './styles/HomePageStyles';

function HomePage() {

  let navigate = useNavigate();

  const user = useSelector(state => state.user);
  let auth = useAuth();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (user !== null) {
      auth.signin(user, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    }
  }, [])

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
      </div>



    </HomePageContainer>
  )
}

export default HomePage