import React, {useState} from 'react';
import { Container, Typography, Grid, Tooltip, Card, CardContent} from '@mui/material';
import repos from '../data/repos';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faImage, faLaptopCode, faTools} from "@fortawesome/free-solid-svg-icons";
import corner from "../styles/img/corner.png";
import logo from "../styles/img/logo.png";
import cornerright from "../styles/img/cornerright.png";
import { faGithub }  from '@fortawesome/free-brands-svg-icons';
import { FaReact, FaNode, FaCss3, FaHtml5, FaNpm, FaJs, FaGoogle,} from 'react-icons/fa';
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
            return <img style={{width: '22px', objectFit: 'contain'}} src={Vite} alt='vite'></img>;
        case 'MongoDB':
                return <img style={{width: '22px', objectFit: 'contain'}} src={MongoDB} alt='vite'></img>
        default:
            return null;
    }
}


function Repos() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    React.useEffect(() => {
        document.title = "CornerZero - Repos";
        return () => {

          document.title = "CornerZero - Homepage";
        };
      }, []);

    const handleOpen = (imageSrc) => {
        setSelectedImage(imageSrc);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    

    return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "1rem"
        }}>
                <Typography style={{
                fontSize: "20px",
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center",
            }}>
              <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>
                 - Repos Corner - 
                 <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={cornerright} alt='icon'></img>
            </Typography>
            <Typography style={{ textAlign: 'center', color: 'white', fontSize: "14px" }}>Repos and projects built or worked on.  
            <FontAwesomeIcon style={{marginLeft: "15px"}} icon={faLaptopCode}></FontAwesomeIcon>
            </Typography>
            <div style={{
                border: "1px solid #5CB574"
            }}></div>
            <Grid container spacing={2}>
                {repos.map((repo) => (
                    <Grid item xs={12} md={4} key={repo.id}>
                        <Card style={{ backgroundColor: '#183D3D', height: 'auto', overflow: 'hidden', padding: "10px" }}>
                                <CardContent style={{
                                    padding: "5px"
                                }}>

                                    <Typography style={{ color: 'white', alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                                        <div style={{display: 'flex', alignItems: "center"}}>
                                        <img style={{ width: "30px", objectFit: 'contain' }} alt='corner' src={corner}></img>
                                        - {repo.title}
                                            </div>
                                            <Tooltip title='Open screenshot'>
                                    <FontAwesomeIcon
                                    icon={faImage}
                                    onClick={() => handleOpen(repo.screen[0])}
                                >
                                </FontAwesomeIcon>
                                </Tooltip>
                                    </Typography>
                                    
                                    <Card style={{
                                        backgroundColor: '#0E0E0E',
                                        padding: "8px",
                                        marginTop: "0.5rem"
                                    }}>
                                    <Typography style={{ color: 'white', marginBottom: '1rem', fontSize: '12px', padding: "5px" }}>{repo.description}</Typography>
                                
                                    </Card>
                                    <h5 style={{color: "#5CB574", textAlign: "center"}}>DEV Tools
                                    <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faTools}></FontAwesomeIcon>
                                    </h5>
                                    <div style={{
                                        display: "flex",
                                        color:"white",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: '25px',
                                        fontSize: "20px"
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
                                        justifyContent: 'space-between',
                                        borderTop: "1px solid grey",
                                    }}>
                                        <Tooltip title='Repository'>
                                        <a style={{textDecoration:"none", color: '#5CB574', fontWeight: "bold", marginTop: "0.6rem"}} href={repo.github}>
                                        Github
                                        <FontAwesomeIcon style={{
                                        marginLeft: "10px", color: 'white'
                                    }} icon={faGithub}></FontAwesomeIcon>
                                        </a>
                                        </Tooltip>
                                        <Tooltip title='Live'>
                                        <a style={{textDecoration:"none", color: '#279EFF', fontWeight: "bold", marginTop: "0.6rem"}} href={repo.link}>
                                        DEMO
                                        <FontAwesomeIcon style={{
                                        marginLeft: "10px", color: 'white'
                                    }} icon={faExternalLink}></FontAwesomeIcon>
                                        </a>
                                        </Tooltip>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Dialog style={{
                                }} open={open} onClose={handleClose}>   
                                <DialogTitle style={{ height: "40px" ,display: "flex", fontSize: '14px', borderBottom: "1px solid gray", justifyContent: "space-between", alignItems: "center", fontWeight: 'bold', backgroundColor: '#183D3D', color: '#5CB574'}}>{`${repo.title}`}
                                    <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faImage}></FontAwesomeIcon>
                                </DialogTitle>
                                    <DialogContent style={{backgroundColor: 'rgba(0,0,0, 1)'}}>
                                    <img src={selectedImage} alt="Preview" style={{ marginTop: "1rem", width: '100%', height: 'auto', borderRadius: "0.4rem" }} />
                                    </DialogContent>
                            </Dialog>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Repos;
