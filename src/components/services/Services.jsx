import React from 'react'
import HeaderSpan from '../headerSpan/HeaderSpan';
import { ServicesContainer } from './styles/ServiceStyles';
import { dataService } from '../utils/dataService';
import ItemService from '../items/ItemService';
import Grid from '@mui/material/Grid';

const Services = () => {


  const header = 'Our Services';
  const description = 'DrugsIntel customers can use our Compass to address and solve unique challenges in the Orphan Drug and Rare disease world';

  return (
    <ServicesContainer>
      <HeaderSpan header={header} description={description} />
      <Grid container spacing={2}>
        {dataService.map((i, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ItemService
              id={i.id}
              icon={i.icon}
              header={i.header}
              description={i.description}
            />
          </Grid>
        ))}

      </Grid>



    </ServicesContainer>
  )
}

export default Services