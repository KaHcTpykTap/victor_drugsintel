import React from 'react'
import HeaderSpan from '../headerSpan/HeaderSpan';
import { TeamContainer } from './styles/TeamStyles';
import Grid from '@mui/material/Grid';
import { dataTeam } from '../utils/dataTeam';
import ItemTeam from '../items/ItemTeam';

const Team = () => {

  const header = 'Our Team';
  const topHeader = 'THE EXECUTIVE TEAM';

  return (
    <TeamContainer>
      <HeaderSpan header={header} topHeader={topHeader} />
      <Grid container spacing={4} sx={{justifyContent: 'center'}}>
        {dataTeam.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
            <ItemTeam
              image={item.image}
              name={item.name}
              position={item.position}
              description={item.description}
              linkedin={item.linkedin} />
          </Grid>
        ))}
      </Grid>
    </TeamContainer>
  )
}

export default Team