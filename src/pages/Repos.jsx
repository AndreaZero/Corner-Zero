import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';
import repos from '../data/repos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import { faGithub }  from '@fortawesome/free-brands-svg-icons';
import "../styles/components/Repos.scss";
import { FaReact, FaNode, FaScrewdriver, FaCss3, FaHtml5, FaJava, FaNpm, FaJs, FaGoogle,} from 'react-icons/fa';
import Vite from "../styles/img/vite.png";
import MongoDB from "../styles/img/mongodb.png";

const getToolIcon = (tool) => {
    switch (tool) {
        case 'React':
            return <FaReact />;
        case 'Node.js':
            return <FaNode />;
        case 'CSS':
                return <FaCss3 />;
        case 'Html':
                    return <FaHtml5 />;
        case 'Javascript':
                return <FaJs />;
                case 'google-dev':
                    return <FaGoogle />;
        case 'npm':
                    return <FaNpm />;
        
        case 'Vite':
            return <img style={{width: '32px', objectFit: 'contain'}} src={Vite} alt='vite'></img>;
        case 'MongoDB':
                return <img style={{width: '32px', objectFit: 'contain'}} src={MongoDB} alt='vite'></img>
        default:
            return null;  // o un'icona di default se lo preferisci
    }
}


function Repos() {
    return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
        }}>
  <Typography style={{
                fontSize: "30px",
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center",
                marginBottom: "1rem"
            }}>
              <img style={{ width: "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>
                 - Repos Corner - 
                 <img style={{ width: "40px", objectFit: 'contain' }} src={cornerright} alt='icon'></img>
            </Typography>
            <Typography style={{ textAlign: 'center', color: 'white' }}>Repos and projects built or worked on.  
            <FontAwesomeIcon style={{marginLeft: "15px"}} icon={faLaptopCode}></FontAwesomeIcon>
            </Typography>
            <div style={{
                border: "1px solid #5BB272"
            }}></div>
            <Grid container spacing={3}>
                {repos.map((repo) => (
                    <Grid item xs={12} md={4} key={repo.id}>
<Card style={{ backgroundColor: '#183D3D', height: '450px', overflow: 'hidden' }}>
                            <CardContent>
                                <Typography variant="h5" style={{ color: 'white' }}>{repo.title}
                                </Typography>
                                <Card style={{
                                    backgroundColor: '#0E0E0E',
                                    marginTop: "0.5rem",
                                    marginBottom: "1rem",
                                    padding: "10px"
                                }}>
                                <Typography style={{ color: 'white', marginBottom: '1rem', fontSize: '14px' }}>{repo.description}</Typography>
                                </Card>
                                {repo.screen.slice(0, 3).map((imgSrc, idx) => (
            <CardMedia
                key={idx}
                component="img"
                image={imgSrc}
                alt={`${repo.title} - image ${idx}`}
                style={{ width: '50%', objectFit: 'contain', borderRadius: '0.4rem', marginBottom: "1rem"}}
            />
        ))}
                                <div style={{
                                    display: "flex",
                                    gap: "3rem",
                                    color:"white",
                                    alignItems: "center",
                                    justifyContent:"center",
                                    fontSize: "30px"
                                }}>
                                {repo.toolsUsed.map(tool => (
                                    <span style={{
                                    }} key={tool}>
                                        {getToolIcon(tool)}
                                    </span>
                                ))}
                                </div>
                                <Typography variant="body2" style={{ color: 'white', marginTop: '1rem' }}>
                                <div style={{
                                    display:'flex',
                                    alignItems: "center",
                                    justifyContent:"center",
                                }}>
                                    <a style={{textDecoration:"none", color: '#5CB574', fontWeight: "bold"}} href={repo.link}>
                                    Github Repository
                                    </a>
                                    <FontAwesomeIcon style={{
                                    marginLeft: "10px"
                                }} icon={faGithub}></FontAwesomeIcon>
</div>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Repos;
