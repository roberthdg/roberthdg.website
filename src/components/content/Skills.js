import React from 'react'
import Title from '../layout/Title';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bar: {
    backgroundColor: 'rgb(3,127,255)'
  },
  root: { 
    backgroundColor:'rgb(46,52,78)',
    barColorPrimary:'black',
    margin:'10px 20px 20px 0',
    height:'10px',
    borderRadius: '100px',
  }
})

const Content = () => {

  const classes = useStyles();
  
  function renderRows(items) {  
    return (
      <>
      {items.map(item => (
        <Grid key={Object.keys(item)[0]} item xs={12} lg={6}>
          <Typography variant='h6' style={{fontWeight:'400'}}>{Object.keys(item)[0]} <br/>
            <LinearProgress variant="determinate" classes={classes} value={Object.values(item)[0]} />
          </Typography>
        </Grid>
      ))}
      </>
    );
  }

  return(
    <>
    <Title>Skills</Title>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
        {renderRows([{'JavaScript': 90}, {'HTML5/CSS3': 85}])}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {renderRows([{'React': 85}, {'Redux': 80}])}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {renderRows([{'Python': 70}, {'SQL/NoSQL': 78}])}
      </Grid>
    </Grid>
    </>
  )
}

export default Content;