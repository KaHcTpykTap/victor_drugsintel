import React from 'react'
import { DashboardContainer } from './styles/DashboardStyles';
import Grid from '@mui/material/Grid';
import Intro from './Intro';
import NavPanel from './NavPanel';


const Dashboard = () => {
  return (
    <DashboardContainer>
      <Grid container spacing={12} sx={{ justifyContent: 'right' }}>
        <Grid item xs={12} /* sm={10} */ md={4} >
          <NavPanel />
        </Grid>
        <Grid item xs={12} /* sm={10} */ md={8} >
          <Intro />
        </Grid>

      </Grid>
    </DashboardContainer>
  )
}

export default Dashboard