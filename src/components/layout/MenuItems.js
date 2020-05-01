import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby'
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-align:center;
  text-transform: uppercase;
  height: 40px;
  padding-top: 10px;
  width: 95%;
  text-decoration: none; 
  color: rgb(164,172,196);
  background: transparent;
  background: linear-gradient(to right, rgb(21,48,85) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position:right bottom;
  transition:all 0.5s ease;
  
  :hover {
    color: rgb(3,127,255);
    background-position:left bottom;
  }
`;

const avatarStyle = {
  width:'120px', 
  height:'120px', 
  marginLeft: '5px',
  border: '5px solid rgb(46,52,78)',
  marginTop: '25px',
  marginBottom: '18px'
}

const MenuItems = () => {

  return(
    <Grid   
    container
    direction="column"
    alignItems="center"
    justify="center"
    >
      <Avatar alt="profile picture" src="/brand-image.jpg" imgProps={{draggable:'false'}} style={avatarStyle} /> <hr/>
      
      {['', 'about', 'portfolio', 'contact'].map((text, index) => (
        <StyledLink to={`/${text}`} activeStyle={{color:'rgb(255,255,255)', background: 'rgb(3,127,255)'}}>
            <ListItemText 
              key={text} 
              primary={index===0 ? 'home' : text}  
              style={{fontFamily: "'Nunito', sans-serif"}}
            />
        </StyledLink>
      ))}

      <style jsx>{`
        hr { 
          border-top: 1px solid rgb(25,29,43);
          border-left: 0px;
          border-right: 0px;
          border-bottom: 1px solid rgb(46,52,78);
          width:100%;
          margin-bottom: 50px;
        }`}
      </style>

      <img src='/logo.png' alt='logo' height='50px' draggable={false} style={{opacity:'0.4', position:'absolute', bottom:'60px',zIndex:'-1'}} />
      <Typography style={{bottom: '20px', position: 'absolute', fontWeight: '200', fontSize: '14px'}}> &copy; {(new Date().getFullYear())} Roberth Gómez</Typography>
    </Grid>
  )
}

export default MenuItems;