import React from 'react';
import Title from '../layout/Title';
import Typography from '@material-ui/core/Typography';
import Skills from './Skills';
import Resume from './Resume';
import Grid from '@material-ui/core/Grid';

const Content = () => {
  return(
    <>
    <Title>About me</Title>
    <Typography component='span'>
    <Grid container spacing={1}>
      <Grid container item xs={11} lg={6}>
        <span className='about'>
          Systems engineer from Venezuela with over 7 years of experience as a software developer, 
          working on projects across multiple platforms and programming languages.
        </span>
      </Grid>
      <Grid container item xs={6} lg={6}>
          <a href='/roberth-gomez-cv.pdf' target="_blank"> Download CV </a>
      </Grid>
    </Grid>
    </Typography>

    <br/><br/>
    <Skills />
    <br/><br/>

    <br/><br/>
    <Resume />
    <br/><br/>

    <style jsx>{`
      a {
        text-align:center;
        text-transform: uppercase;
        padding: 12px;
        width: 200px;
        height: 25px;
        text-decoration: none;
        color:rgb(255,255,255);
        background-color: rgb(3,127,255) !important;
        cursor:pointer;
      }

      .about {
        font-weight: 300;
        font-size: 19px;
        margin-bottom: 30px;
      }
      
      @media screen and (max-width: 900px) {
        a {
          width: 300px;
        }
      }

      @media screen and (min-width: 1142px) {
        a {
          margin-left: 5vh;
        }
      }
    `}</style>

    </>
  )
}

export default Content;
