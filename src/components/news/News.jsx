import React from 'react'
import { NewsContainer } from './styles/NewsStyles';
import HeaderSpan from '../headerSpan/HeaderSpan';
import { dataNews } from '../utils/dataNews';
import ItemNews from '../items/ItemNews';
import Grid from '@mui/material/Grid';

const News = () => {

  const topHeader = 'RECENT UPDATES';
  const header = 'News';

  return (
    <NewsContainer>
      <HeaderSpan header={header} topHeader={topHeader} />
      <Grid container spacing={12}>
        {dataNews.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <ItemNews
              image={item.image}
              header={item.header}
              headerBottom={item.headerBottom}
              description={item.description} />
          </Grid>
        ))
        }
      </Grid>

    </NewsContainer>
  )
}

export default News