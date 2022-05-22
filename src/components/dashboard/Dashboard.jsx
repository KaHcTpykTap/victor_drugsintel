import Grid from '@mui/material/Grid';
import React from 'react';
import Articles from './Articles';
import AssociatedDrugs from './AssociatedDrugs';
import EpidemData from './EpidemData';
import Estimations from './Estimations';
import Incentives from './Incentives';
import Information from './Information';
import Intro from './Intro';
import KOL from './KOL';
import NavPanel from './NavPanel';
import Rate from './Rate';
import { DashboardContainer } from './styles/DashboardStyles';

const Dashboard = () => {

  const items = [Intro, Incentives, AssociatedDrugs, EpidemData, KOL, Articles, Estimations, Information, Rate];

  return (
    <DashboardContainer>
      <Grid container spacing={12} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} /* sm={10} */ md={4}>
          <NavPanel />
        </Grid>
        <Grid item xs={12} /* sm={10} */ md={8} >
          <h1>Disease Report</h1>
          {items.map((item, index) => <div id={`_${index}`} key={index}>{item()}</div>)}
          {/*           <Intro />
          <Incentives />
          <AssociatedDrugs isActive={isActive}/>
          <EpidemData />
          <KOL />
          <Articles /> */}
        </Grid>

      </Grid>
    </DashboardContainer>
  )
}

export default Dashboard