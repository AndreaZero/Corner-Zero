import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Box, Typography, Button, Grid, Container } from '@mui/material';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub, faGofore, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEye, faGlasses, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects';
import { useMediaQuery } from '@mui/material';

function Flipcard() {
    const [currentProject, setCurrentProject] = useState(0);
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    const handleNext = () => {
        setCurrentProject(prev => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProject(prev => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <>
        <Container style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
                <CardContent style={{ gap: "1rem", backgroundColor: "#183D3D",borderRadius: "1rem", width: "350px", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", textAlign: 'left', }}>
                    <Typography style={{color: "white"}}><span style={{ color: '#5cb574',fontWeight: 'bolder'}}>Name:</span> {projects[currentProject].title}</Typography>
                    <Typography style={{color: "white"}}><span style={{ color: '#5cb574',fontWeight: 'bolder'}}>Info:</span>  {projects[currentProject].description}.
                    </Typography> 
                    </div>
                            <CardMedia
                                component="img"
                                style={{
                                width: '300px',
                                objectFit: "contain",
                                borderRadius: "0.5rem"
                            }}
                            image={projects[currentProject].imageUrl}
                            alt={projects[currentProject].title}
                            />
                            <Container style={{
                                display: "flex", justifyContent: 'space-between', alignItems: "center"
                            }}>
                                <Button style={{width: "auto", backgroundColor: 'black', fontSize: '9px', color: "#5cb574", fontWeight: "bolder"}} >Flip & Read 
                                    <FontAwesomeIcon icon={faGlasses} style={{marginLeft: '5px'}}></FontAwesomeIcon>
                                </Button>
                                        <Box style={{
                                            width: "auto",
                                            display: 'flex',
                                            alignItems: "center",
                                            justifyContent: 'center',
                                            padding: '5px',
                                            gap: "0.4rem",
                                            color: "#5cb574",
                                            borderRadius: "0.3rem"
                                    }}>
                                        <a href={projects[currentProject].link} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon  style={{color: "#5cb574", backgroundColor: "black", padding: '5px', borderRadius: "100%"}} icon={faGithub}></FontAwesomeIcon></a> -
                                        <a href={projects[currentProject].link} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon style={{color: "#5cb574", backgroundColor: "black", padding: '5px', borderRadius: "100%"}} icon={faEye}></FontAwesomeIcon></a>
                                    </Box>
                               
                            </Container>
                </CardContent>
                {/* <p>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs?username=andreazero&locale=en&theme=dark&card_width=300" alt="andreazero" />
                </p> */}
        </Container>
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h5>Swipe to see more projects</h5>
                  <div style={{display: 'flex', justifyContent: "center", gap: "2rem", alignItems: "center"}}>
                     <Button onClick={handlePrev}>Precedente</Button>
                     <Button onClick={handleNext}>Successivo</Button>
                  </div>
        </div>
        </>
    );
}

export default Flipcard;
