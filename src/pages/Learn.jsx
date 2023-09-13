import React, {useState} from 'react';
import { Container, Typography, Grid, Card, CardContent, Button} from '@mui/material';
import learn from '../data/learn';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faImage} from "@fortawesome/free-solid-svg-icons";
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import "../styles/components/Repos.scss";

function Learn() {
    const [open, setOpen] = useState(false);
    const [selectedLearn, setSelectedLearn] = useState(null);
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
    const [currentPage, setCurrentPage] = useState(1);
    const [randomizedLearnData, setRandomizedLearnData] = useState([]);

    const ITEMS_PER_PAGE = 8;

    React.useEffect(() => {
        const randomizedData = [...learn].sort(() => Math.random() - 0.5);
        setRandomizedLearnData(randomizedData);
    }, []);

    const currentItems = randomizedLearnData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);



    React.useEffect(() => {
        document.title = "CornerZero - learns";
        return () => {
          document.title = "CornerZero - Homepage";
        };
      }, []);

      const handleOpen = (selected) => {
        setSelectedLearn(selected);
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
                 - Learning Corner - 
                 <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={cornerright} alt='icon'></img>
            </Typography>
            <Typography style={{ textAlign: 'center', color: 'white', fontSize: "14px" }}>WEB-focused tips, info and guides.
            <FontAwesomeIcon style={{marginLeft: "15px"}} icon={faEarth}></FontAwesomeIcon>
            </Typography>
            <div style={{
                border: "1px solid #5CB574"
            }}></div>
            <Grid container spacing={2}>
            {currentItems.map((learn) => (
                    <Grid item xs={12} md={3} key={learn.id}>
                    <Card style={{ backgroundColor: '#183D3D', height: 'auto', overflow: 'hidden', padding: "10px" }}>
                            <CardContent style={{
                                padding: "5px"
                            }}>
                                <Typography style={{ color: 'white', alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                                    <div style={{display: 'flex', alignItems: "center"}}>
                                        <img style={{ width: "30px", objectFit: 'contain' }} alt='corner' src={corner}></img>
                                        - {learn.title}
                                    </div>
                                    <span style={{color: '#1976d2'}}>{learn.category}</span>
                                </Typography>
                                <Card style={{
                                        backgroundColor: '#0E0E0E',
                                        padding: "8px",
                                        marginTop: "0.5rem"
                                        }}>
                                    <Typography style={{ color: 'white', marginBottom: '1rem', fontSize: '12px', padding: "5px" }}>{learn.description}</Typography>
                                    <Button component={Link} to={`/learn/${learn.id}`}
                                        style={{
                                            backgroundColor: '#161b22',
                                            color: '#5cb574',
                                            fontSize: '12px'
                                        }} onClick={() => handleOpen(learn)}
                                    >
                                        Learn about {learn.title}
                                    </Button>
                                </Card>
                            </CardContent>
                        </Card>


                        <Dialog open={open} onClose={handleClose}>
                        <DialogTitle style={{ height: "40px" ,display: "flex", fontSize: '14px', borderBottom: "1px solid gray", justifyContent: "space-between", alignItems: "center", fontWeight: 'bold', backgroundColor: '#183D3D', color: '#5CB574'}}>
    {selectedLearn && `${selectedLearn.title}`}
    <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faImage}></FontAwesomeIcon>
</DialogTitle>

                    <DialogContent style={{
                        backgroundColor: 'black', 
                        }}>
                        {selectedLearn && 
                            <div 
                             dangerouslySetInnerHTML={{ __html: selectedLearn.popup }} 
                             style={{ color: 'white', padding: '10px' }}
                            />
                         }
                    </DialogContent>
                        </Dialog>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "0.4rem",alignItem: 'center' }}>
    <Button 
     style={{
        backgroundColor: '#161b22',
        color: '#5cb574',
        fontSize: '12px'
    }}
        disabled={currentPage === 1} 
        onClick={() => setCurrentPage(currentPage - 1)}>
        Previous
    </Button >
    <span style={{ margin: "5px" }}> &gt; {currentPage} &lt; </span>
    <Button  style={{
                backgroundColor: '#161b22',
                color: '#5cb574',
                fontSize: '12px'
            }}
        disabled={currentPage === Math.ceil(learn.length / ITEMS_PER_PAGE)} 
        onClick={() => setCurrentPage(currentPage + 1)}>
        Next
    </Button>
</div>
        </Container>
    );
}

export default Learn;
