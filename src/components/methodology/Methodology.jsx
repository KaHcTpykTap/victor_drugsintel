import React from 'react'
import { MethodologeContainer } from './styles/MethodologyContainer';
import Grid from '@mui/material/Grid';

const Methodology = () => {
  return (
    <MethodologeContainer>
      <div className="m-title">
        <h2>Successful Launching of Orphan Drugs Methodology</h2>
        <div className='span'></div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div className='m-item'>
            <span className="material-icons">
              search
            </span>
            <p>Detection and diagnosis</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='m-item'>
            <span className="material-icons">
              card_giftcard
            </span>
            <p>Treatment access incentive and reimbursement</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='m-item'>
            <span className="material-icons">
              people_outline
            </span>
            <p>Key opinion leader and healthcare professional collaboration</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='m-item'>
            <span className="material-icons-outlined">
              medical_services
            </span>
            <p>Treatment retention and collection of data &amp; real-world evidence</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='m-item'>
            <span className="material-icons">
              description
            </span>
            <p>Advocacy group alliances</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='m-item'>
            <span className="material-icons">
              campaign
            </span>
            <p>Disease Awareness and education</p>
          </div>
        </Grid>
      </Grid>
    </MethodologeContainer>
  )
}

export default Methodology