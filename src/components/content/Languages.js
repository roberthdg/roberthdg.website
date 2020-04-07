import React from 'react'
import Title from '../layout/Title';
import Grid from '@material-ui/core/Grid';

const Content = () => {
  
  return(
    <>
    <Title>Languages</Title>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
        English
      </Grid>
      <Grid container item xs={12} spacing={1}>
        Spanish
      </Grid>
      <Grid container item xs={12} spacing={1}>
        Portuguese
      </Grid>
    </Grid>
    </>
  )
}

export default Content;