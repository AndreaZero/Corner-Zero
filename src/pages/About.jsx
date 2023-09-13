import { Container, Card, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import mehi from "../styles/img/mehi.png";
import it from "../styles/img/it.png";
import corner from "../styles/img/corner.png";
import Flipcard from '../components/FlipCard';
import cornerright from "../styles/img/cornerright.png";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { 
    faCss3, faDiscord, faEthereum, faFigma, faGit, 
    faHtml5, faJs, faNodeJs, faNpm, faRProject, faReact, faSass 
} from "@fortawesome/free-brands-svg-icons";
import {
    faBrain, faTerminal
} from '@fortawesome/free-solid-svg-icons';




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

    const fade = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };





    const iconStyle = isMobile ? {
        fontSize: "30px",
        fontSize: "2rem",
        color: '#5CB574'
    } : {
        marginRight: "1rem",
        fontSize: "40px",
        color: '#5CB574',
    };

    

  return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            width: isMobile ?  'auto' : undefined
        }}>
            <motion.div initial="hidden" animate="visible" variants={fade}></motion.div>
                <Card
                        style={{
                            backgroundColor: "transparent",
                            color:"white",
                            width: "auto",
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
                <h4>I'm Andrea. <br />Junior web developer
            <FontAwesomeIcon icon={faLaptopCode} style={{ marginLeft: "5px" }}></FontAwesomeIcon>

            </h4>
            <motion.div initial="hidden" animate="visible" variants={fadeImg} whileHover={{ scale: 1.1 }}>
                  <img src={mehi} alt='mehi' style={{
                      width: "200px",
                      borderBottom: "1px solid grey",
                      objectFit: 'contain',
                      boxShadow: "0px 0px 3px 0px black"
                                }}></img>
                                </motion.div>
                                    <h4 style={reflectionStyle}>I'm a 30-year-old dude from Rome <img src={it} alt='it'></img> </h4>
                                    <h5 style={reflectionStyle}>One of my biggest passion is coding. I whipped up my first website at 11..<br />
                                    Wasn't much into textbooks. Instead, I juggled studying code and web dev while working on the side.<br/>
                                    I've been riding the web development wave hard for the last 12 months.<br/>
                                    On top of that, I've rolled out several personal projects for both learning and work.<br/> Oh, and I'm no stranger to Web3 too!
                                    </h5>
                                </Card>

                                <div style={{ border: '1px solid grey'}}></div>


                                <Typography style={{ textAlign: 'center', color: 'white', fontSize: "25px", fontWeight: 'bold' }}>
                                Knowledge
                                <FontAwesomeIcon icon={faBrain} style={{ marginLeft: "8px" }}></FontAwesomeIcon>
                            </Typography>
                                <Card
                            style={{
                                display: 'flex',
                                justifyContent: "center",
                                gap: "1rem",
                                padding: "20px",
                                alignItems: "center",
                                borderRadius: '1rem',
                                backgroundColor: 'transparent',
                            }}>

                                

                                <Container
                                    style={{
                                        gap: isMobile ? "0.5rem" : "1rem",
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: "center",
                                        justifyContent: 'center',
                                    }}>
                                    {
                                        [
                                            faReact, faJs, faNodeJs, faNpm, faHtml5, faCss3, faSass,
                                            faEthereum, faDiscord, faFigma, faGit, faTerminal
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
                         </Card>
                      <div style={{ border: '1px solid grey'}}></div>
                      <Typography style={{ textAlign: 'center', color: 'white', fontSize: "25px", fontWeight: 'bold' }}>
                                Projects
                                <FontAwesomeIcon icon={faBriefcase} style={{ marginLeft: "8px" }}></FontAwesomeIcon>
                            </Typography>
               <Flipcard />                   
          </Container>
  )
}

export default About;



