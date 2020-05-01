import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Title from '../layout/Title';
import CircularProgress from '@material-ui/core/CircularProgress';

const projectsData = [
    {
        id:'fletesya',
        name:'Fletes Ya',
        description:`All-in-one platform for shipment services. Calculate costs using Google Maps API, or create an auction 
        to get offers from dozens of carriers near your location, allowing you to choose the option that best suits your needs.`,
        links:['https://fletesya.cl/', 'private']
    },
    {
        id:'futdraft',
        name: 'FIFA Ultimate Team Draft',
        description:`Single-page application developed with React/Redux, connected to a custom-built RESTful API. 
        Create the best possible football squad, select and swap players on the field to get the highest score.`,
        links:['https://fifa-ultimate-team-draft.herokuapp.com/', 'https://github.com/roberthdg/FIFA-ultimate-team-draft-ReactJS']
    },
    {
        id:'coinhub',
        name:'Coinhub',
        description:`Web app designed with Material-UI. Multi-language support and light/dark themes enabled using React's Context API. 
        Monitor cryptocurrency prices and calculate costs in your local currency using up-to-date exchange rates.`,
        links:['https://coinhub-react.herokuapp.com/', 'https://github.com/roberthdg/Coinhub-material-UI']
    },
    {
        id:'yachana',
        name:'Yachana Academy',
        description:`Landing page for an online courses academy, built with Gatsby and designed with Material-UI. User messages and mail subscriptions enabled through an API created with Express and Nodemailer.`,
        links:['https://centrodecertificacion.com/', 'https://github.com/roberthdg/Yachana-online-courses']
    }
]

const Content = () => {

    const [imgLoaded, setImgLoaded] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    useEffect(() => {
       document.getElementById('button').focus()
    }, []);

    const changeProject = (direction) => {
        setImgLoaded(false);
        //switch projects according to which arrow is clicked
        direction==='left' 
        ? currentItem===0 ? setCurrentItem(projectsData.length-1) : setCurrentItem((currentItem-1))
        : currentItem===projectsData.length-1 ? setCurrentItem(0) : setCurrentItem((currentItem+1))
    }

    const handleClick = (e) => {
        if (e.keyCode === 37) changeProject('left'); 
        if (e.keyCode === 39) changeProject('right'); 
    }

    return(
        <>
        <Title>projects</Title>

        <div className='wrapper'>
            <Grid container>
                <Grid container item xs={1} justify="center">
                    <div id='button' role='button' tabIndex='0' className="arrow left" onClick={() => changeProject('left')} onKeyDown={handleClick}/>
                </Grid>

                <Grid container item xs={10} justify="center">
                    <img src="/laptop.png" alt='laptop' className='laptop' draggable={false} />
                    <img role="presentation" src={`/${projectsData[currentItem].id}-laptop.jpg`}  alt='laptop-project' draggable={false} className={imgLoaded? 'screen desktop' : 'none'} onLoad={() => {setImgLoaded(true)}}/> 
                
                    <img src="/phone.png" alt='phone' className='phone' draggable={false} />
                    <img role="presentation" src={`/${projectsData[currentItem].id}-phone.jpg`} alt='phone-project' draggable={false} className={imgLoaded? 'screen mobile' : 'none'} onLoad={() => setImgLoaded(true)}/> 
                   
                    {imgLoaded? null : <div className='loader'> <CircularProgress size='80px' style={{color:'rgb(3,127,255)'}} /> </div> }

                    <div className='details'>
                        <Typography variant='h6'>
                            <span className='title'>{projectsData[currentItem].name}</span> <br/>
                            <span className='span mobile'><br/></span>
                            <span className='description'>{projectsData[currentItem].description}</span>  <br/> <br/>
                            {projectsData[currentItem].links[1]==='private'
                            ?<div><a className='link' href={projectsData[currentItem].links[0]} target="_blank" rel="noopener noreferrer">Visit page</a> </div>
                            :<div><a className='link' href={projectsData[currentItem].links[0]} target="_blank" rel="noopener noreferrer">Visit page</a> - <a className='link' href={projectsData[currentItem].links[1]} target="_blank" rel="noopener noreferrer">Go to Github</a></div>}
                        </Typography>
                    </div>
                </Grid>

                <Grid container item xs={1} justify="center">
                    <div role='button' tabIndex='0' className="arrow right" onClick={() => changeProject('right')} onKeyDown={handleClick}/>
                </Grid>
            </Grid>
        </div>

        {/* page style */}

        <style jsx>{`
            .details {
                color: white; 
                margin-top: 470px;
                max-width: 800px; 
                text-align: center;
            }

            .none {
                display:none;
            }

            .link {
                text-decoration:none;
                color:white;
                cursor: pointer;
            }
            
            .link:hover {
                color: rgb(3,127,255);
            }

            .description {
                font-weight: 300; 
            }

            .title {
                color:rgb(3,127,255); 
                font-size: 45px; 
                font-weight: 600;  
                font-family: 'Nunito', sans-serif;
                text-shadow: rgb(20,23,34) 3px 5px 2px, 2px 2px 2px rgb(20,23,34);
            }

            .laptop {
                position:absolute;
                height:450px;
            }
            
            .screen {
                position:absolute;
                height: 350px;
                margin-top: 27px;
                z-index:-1;
            }

            .loader {
                position: absolute;
                z-index: 2;
                margin-top:150px;
            }

            .arrow {
                position: absolute;
                border-top: 35px solid transparent;
                border-bottom: 35px solid transparent; 
                margin-top: 180px;
                cursor: pointer;
            }

            .arrow:active {
                transform: scale(0.9);
            }
            
            .arrow:focus {
                outline: none;
            }

            .left {
                border-right: 27px solid rgb(164,172,185); 
            }

            .right {   
                border-left: 30px solid rgb(164,172,185); 
            }

            @media screen and (min-width: 1142px) {
                .mobile, .phone {
                    display:none;
                }
                .right:hover {
                    border-left: 30px solid rgb(3,127,255); 
                }
                .left:hover {
                    border-right: 27px solid rgb(3,127,255); 
                }
            }

            @media screen and (max-width: 1142px) {
                .laptop, .desktop {
                    display:none;
                }
                
                .span {
                    color:transparent;
                }

                .phone {
                    height: 440px;
                }

                .mobile {
                    border-top: 5px solid rgb(53,54,58);
                    margin-top: 12px;
                    height: 395px;
                    z-index: -3;
                }
                
                .title {
                    line-height : 40px;
                    font-size: 40px;
                }

                .wrapper {
                    margin-left:-15px;
                }

                .arrow {
                    margin-top: 160px;
                }

                .arrow:active {
                    transform: scale(0.9);
                }    

                .details {
                    margin-top: 10px;
                }
            }
            `}
        </style>
        </>
    )
}

export default Content;