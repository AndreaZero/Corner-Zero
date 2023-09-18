import { Container, Card, Typography, Button, Tooltip } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import mehi from "../../styles/img/mehi.png";
import it from "../../styles/img/it.png";
import corner from "../../styles/img/corner.png";
import ExperienceCard from './components/ExperienceCard';
import cv from "../../data/cv.pdf";
import cornerright from "../../styles/img/cornerright.png";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { 
    faDiscord, faEthereum, faFigma, faGit, faStackOverflow,
    faCodepen, faNode, faChrome, 
    faHtml5, faJs, faNpm, faReact, faSass, faCss3Alt 
} from "@fortawesome/free-brands-svg-icons";
import {faBrain} from '@fortawesome/free-solid-svg-icons';
import Timeline from './components/Timeline';
import { Tilt } from 'react-tilt';


function About() {
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
    
    const reflectionStyle = {
        textShadow: '8px 18px 7px rgba(255, 255, 255, 0.15)'
    };

    const fadeSequential = (index) => ({
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: index * 0.3,
            duration: 1
          }
        }
      });
      
      const shakeEffect = {
        x: [0, -5, 5, -5, 5, 0],
        y: [0, 5, -5, 5, -5, 0],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
          loop: Infinity
        }
      };
      
      const hoverEffect = {
        scale: 1.5,
        transition: {
          type: "spring",
          stiffness: 300
        }
      };

      const fadeImg = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } }
    };

    const iconStyle = isMobile ? {
        fontSize: "40px",

        color: '#5CB574'
    } : {
        marginRight: "1rem",
        fontSize: "40px",
        color: '#5CB574',
    };

    

        return (
                <Container style={{ /// CONTAINER MAIN ABOUT
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    gap: '1rem',
                }}>
                  <Card  /// CARD BIO
                      style={{
                          color:"white",
                          padding: "20px",
                          textAlign: 'center',
                      }}>
                      <Typography style={{
                          fontSize: "20px",
                          color: "white",
                          fontWeight: 'bolder',
                          textAlign: "center",
                      }}>
                        <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>
                        - Who is Zero? - 
                       <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={cornerright} alt='icon'></img>
                      </Typography>
                      <div style={{border: '1px solid #5cb574', width: "100%"}}></div>

                        <h4>I'm Andrea. <br />Junior web developer
                          <FontAwesomeIcon icon={faLaptopCode} style={{ marginLeft: "5px" }}></FontAwesomeIcon>
                        </h4>
                         <Tilt options={{ max: isMobile ? '0' : '35' }}>

                          <img src={mehi} alt='mehi' style={{
                            width: "200px",
                            borderBottom: "1px solid grey",
                            objectFit: 'contain',
                            }}></img>
                      </Tilt>
                      <h4 style={reflectionStyle}>I'm a 30-year-old dude from Rome <img src={it} alt='it'></img> </h4>
                        <h5 style={reflectionStyle}>One of my biggest passion is coding. I whipped up my first website at 11..<br />
                        Wasn't much into textbooks. Instead, I juggled studying code and web dev while working on the side.<br/>
                        I've been riding the web development wave hard for the last 12 months.<br/>
                        On top of that, I've rolled out several personal projects for both learning and work.<br/>
                        Oh, and I'm no stranger to Web3 too!</h5>
                      <Tooltip title='Download CV'>
                        <Button  style={{   backgroundColor: '#183D3D',
                          height: '25px',
                          color: '#5cb574',
                          boxShadow: "0px 0px 3px 0px #5CB574", 
                          fontSize: "12px"}}>
                          <a href={cv} rel='noreferrer noopener' target='blank'>resume
                            <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faDownload}></FontAwesomeIcon>
                          </a> 
                        </Button>
                      </Tooltip>
                  </Card>
                  <div style={{border: '1px solid #5cb574', width: "100%"}}></div>
                      <Container // KNOWLEDGE
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                            boxShadow: 'none',
                            gap: "1rem",
                            padding: "10px",
                            alignItems: "center",
                            borderRadius: '0.4rem',
                            backgroundColor: 'transparent',
                      }}>
                      <Typography style={{ textAlign: 'center', color: 'white', fontSize: "25px", fontWeight: 'bold' }}>
                          Knowledge
                          <FontAwesomeIcon icon={faBrain} style={{ marginLeft: "8px" }}></FontAwesomeIcon>
                      </Typography>
                      <Container
                          style={{
                              gap: isMobile ? "1.2rem" : "1rem",
                              display: 'flex',
                              flexWrap: 'wrap',
                              alignItems: "center",
                              justifyContent: 'center',
                          }}>
                            {
                            [
                              faReact, faJs, faNpm, faNode, faHtml5, 
                              faCss3Alt, faSass,  faDiscord, faEthereum, faFigma, faGit, faStackOverflow,
                              faCodepen, faChrome, 
                              
                              ].map((icon, index) => (
                                <motion.div
                                  key={index}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  variants={fadeSequential(index)}
                                  whileHover={hoverEffect}
                                >
                                  <motion.div animate={shakeEffect}>
                                    <FontAwesomeIcon style={iconStyle} icon={icon}></FontAwesomeIcon>
                                  </motion.div>
                                </motion.div>
                              ))
                            }
                        </Container>
                </Container>  
                <div style={{border: '1px solid #5cb574', width: "100%"}}></div>

                <Container style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "20px",
                  flexDirection: isMobile ? 'column' : undefined,
                  justifyContent: isMobile ? 'center' : 'space-around',
                }}>
                      <Timeline/>
                      <ExperienceCard/>
                      </Container>
   
                    
          </Container>
  )
}

export default About;



