import { Container, Typography, Card, CardMedia } from '@mui/material';
import learnData from '../data/learn';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import ReactMarkdown from 'react-markdown';


import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import learn from '../data/learn';
import { display } from '@mui/system';

function LearnDetail() {
    const { id } = useParams();
    const learnItem = learnData.find(item => item.id === parseInt(id));
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    if (!learnItem) {
        return <Typography>Error: Card not found!</Typography>;
    }

    return (
      <Container style={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center"
      }}>
              <Card
                style={{
                  backgroundColor: 'transparent',
                  width: isMobile ? 'auto' : '800px',
                  display: 'flex',
                  alignItems: "center",
                  padding: "20px",
                  marginTop: '0.5rem',
                  flexDirection: "column",
                  textAlign: 'center',
                  display: 'flex',
                  overflow: 'hidden',
                  gap: "2rem",
                }}
              >
               <Typography style={{
                          fontSize: "20px",
                          color: "white",
                          fontWeight: 'bolder',
                          textAlign: "center",
                      }}>
                        <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>
                        - {learnItem.title} - 
                       <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={cornerright} alt='icon'></img>
                      </Typography>

                      <Container style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}>

                        {
                          learnItem.link1 && 
                        
                      <Typography style={{
                          fontSize: "16px",
                          color: "white",
                          fontWeight: 'bolder',
                          textAlign: "center",
                      }}>
                        Links:
                        </Typography>
}
                        <Typography style={{
                          fontSize: "14px",
                          color: "white",
                          fontWeight: 'bolder',
                          textAlign: "center",
                      }}>
                        <a href={learnItem.link1}>{learnItem.link1}</a>
                        </Typography>
                        
                        </Container>
                        <Typography
                dangerouslySetInnerHTML={{ __html: learnItem.content }}>
              </Typography>
              
              {
                learnItem.image &&
              <img style={{borderRadius: "1rem", boxShadow: "0px 0px 1px 0px white",   width: "300px", objectFit: 'contain', padding: '10px', backgroundColor: "#0e0e0e"}} alt='img' src={learnItem.image}></img>
              }

a
              <Typography
                dangerouslySetInnerHTML={{ __html: learnItem.content2 }}>
              </Typography>
          </Card>
          </Container>
    );
}

export default LearnDetail;
