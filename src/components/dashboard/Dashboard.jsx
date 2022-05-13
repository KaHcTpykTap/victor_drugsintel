import React from 'react'
import { DashboardContainer } from './styles/DashboardStyles';
import Grid from '@mui/material/Grid';
import Intro from './Intro';
import NavPanel from './NavPanel';
import Incentives from './Incentives';
import AssociatedDrugs from './AssociatedDrugs';
import EpidemData from './EpidemData';
import KOL from './KOL';
import Articles from './Articles';


const Dashboard = () => {
  return (
    <DashboardContainer>
      <Grid container spacing={12} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} /* sm={10} */ md={4}>
          <NavPanel />
        </Grid>
        <Grid item xs={12} /* sm={10} */ md={8} >
          <h1>Disease Report</h1>
          <Intro />
          <Incentives />
          <AssociatedDrugs />
          <EpidemData />
          <KOL />
          <Articles />
        </Grid>

      </Grid>
    </DashboardContainer>
  )
}

export default Dashboard