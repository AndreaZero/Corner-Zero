import React, { useState } from 'react';
import { CardMedia, CardContent, Box, Typography, Button, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub, faGofore, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEye, faGlasses, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects';
import open from "../styles/fxs/open.mp3";
import close from "../styles/fxs/close.mp3";
import SliderModal from './fixed/SliderModal';

import { useMediaQuery } from '@mui/material';

function Flipcard() {
    const [currentProject, setCurrentProject] = useState(0);
    const mobileWidth = 600;
    const [showDesc, setShowDesc] = useState(false);
    const [openImage, setOpenImage] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);

    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };

    const toggleDesc = () => {
        if (showDesc) {
            playSound(close); 
        } else {
            playSound(open);  
        }
        setShowDesc(prev => !prev);
    };

    const toggleOpenImage = () => {
        setOpenImage(prev => !prev);
    };

    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    const handleNext = () => {
        setCurrentProject(prev => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProject(prev => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <>
            <Container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CardContent style={{ backgroundColor: '#0E0E0E', width: "300px", borderRadius: "1rem", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                    
                <CardContent style={{ backgroundColor: '#0E0E0E',  width: "300px", borderRadius: "1rem", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                    <Container style={{display: "flex", padding: '10px', flexDirection: "column", textAlign: 'left', gap: "0.4rem" }}>
                        <Typography style={{fontSize: '12px', color: "white"}}><span style={{ color: '#5cb574',fontWeight: 'bolder'}}>Name:</span> {projects[currentProject].title}</Typography>
                            <Typography style={{fontSize: '12px', color: "white"}}><span style={{ color: '#5cb574',fontWeight: 'bolder'}}>Info:
                                </span>  {projects[currentProject].description}
                            </Typography> 
                            {showDesc && (
                                <Typography style={{fontSize: '12px', color: "white"}}>
                                    <span style={{ color: '#5cb574',fontWeight: 'bolder'}}>Desc:</span>  
                                    {projects[currentProject].back}
                                    <Typography style={{fontSize: '12px', color: "white"}}>
                                    <span style={{ color: '#5cb574',fontWeight: 'bolder'}}>Tools:</span>  

                                     {projects[currentProject].tools}
                                </Typography> 
                                </Typography> 
                                  
                            )}
                            <Container style={{
                                display: "flex", justifyContent: 'space-between', padding: '20px',
                                 alignItems: "center", borderTop: '1px solid white',  
                            }}>
                                <Button 
                                    onClick={toggleDesc}
                                    style={{width: "auto",boxShadow: "0px 0px 1px 0px #5CB574",  backgroundColor: 'black', fontSize: '9px', color: "#5cb574", fontWeight: "bolder"}}
                                >
                                    Read 
                                    <FontAwesomeIcon icon={faGlasses} style={{marginLeft: '5px'}}></FontAwesomeIcon>
                                </Button>
                                        <Box style={{
                                            width: "auto",
                                            display: 'flex',
                                            alignItems: "center",
                                            justifyContent: 'center',
                                            gap: "0.4rem",
                                            color: "#5cb574",
                                            borderRadius: "0.3rem",
                                            fontSize: '12px'
                                        }}>
                                            <a href={projects[currentProject].link} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon  style={{color: "#5cb574", boxShadow: "0px 0px 1px 0px #5CB574", backgroundColor: "#183d3d", padding: '5px', borderRadius: "100%"}} icon={faGithub}></FontAwesomeIcon></a>
                                            <a href={projects[currentProject].link} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon style={{color: "#5cb574", boxShadow: "0px 0px 1px 0px #5CB574",  backgroundColor: "#183d3d", padding: '5px', borderRadius: "100%"}} icon={faEye}></FontAwesomeIcon></a>
                                        </Box>
                            </Container>
                     </Container>
                     </CardContent>
                    <div 
                        style={{ position: 'relative' }} 
                        onClick={toggleOpenImage}
                        onMouseEnter={() => setShowTooltip(true)} 
                        onMouseLeave={() => setShowTooltip(true)}
                    >
                        <CardMedia
                            image={projects[currentProject].imageUrl[0]}
                            alt={projects[currentProject].title}
                            component="img"
                            style={{
                                width: '300px',
                                objectFit: "contain",
                                borderRadius: "0.5rem",
                                boxShadow: '0px 0px 4px 0px #183d3d'
                            }}
                        />
                        {showTooltip && (
                         <div style={{
                            position: 'absolute',
                            bottom: '5%',
                            right: '3%',
                            backgroundColor: '#183d3d',
                            boxShadow: "0px 0px 1px 0px #5CB574",
                            color: '#5cb574',
                            padding: '5px',
                            borderRadius: '5px',
                            fontWeight: 'bolder',
                            cursor: 'pointer',
                            fontSize: '8px'  // Riduzione del font
                        }}>
                            Click to enlarge
                        </div>
                        
                        )}
                    </div>

                    {openImage && (
    <SliderModal images={projects[currentProject].imageUrl} onClose={toggleOpenImage} />
)}
                            <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                            <h5>Swipe to see more</h5>
                                             <div style={{display: 'flex', justifyContent: "center", gap: "1rem", alignItems: "center"}}>
                                                <Button   style={{boxShadow: "0px 0px 1px 0px #5CB574", backgroundColor: '#183D3D', color: '#5CB574', marginLeft: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handlePrev}>prev.</Button>
                                                <Button   style={{boxShadow: "0px 0px 1px 0px #5CB574",  backgroundColor: '#183D3D', color: '#5CB574', marginLeft: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleNext}>NEXT</Button>
                                            </div>
                                        </div>
                </CardContent>   
        </Container>
        </>
    );
}

export default Flipcard;
