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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: 'center',
            width: isMobile ?  'auto' : undefined
        }}>
              <Card
                style={{
                  backgroundColor: 'transparent',
                  width: isMobile ? '100%' : '800px',
                  display: 'flex',
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: 'center',
                  display: 'flex',
                  overflow: 'hidden',
                  gap: "1rem",
                  padding: '20px',
                }}
              >
              <Container style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "2rem"
              }}>
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
                        alignItems: "center",
                        justifyContent: 'center',
                      }}>
                      <Typography style={{
                          fontSize: "16px",
                          color: "white",
                          fontWeight: 'bolder',
                          textAlign: "center",
                      }}>
                        Links:
                        </Typography>
                        <Typography style={{
                          fontSize: "14px",
                          color: "white",
                          fontWeight: 'bolder',
                          textAlign: "center",
                      }}>
                        <a href={learnItem.link1}>{learnItem.link1}</a>
                        </Typography>
                      </Container>
                      </Container>

                   

        
              <Typography
                dangerouslySetInnerHTML={{ __html: learnItem.content }}>
              </Typography>

              <img style={{borderRadius: "1rem", boxShadow: "0px 0px 1px 0px white",   width: "300px", objectFit: 'contain', padding: '10px', backgroundColor: "#0e0e0e"}} alt='img' src={learnItem.image}></img>

              <Typography
                dangerouslySetInnerHTML={{ __html: learnItem.content2 }}>
              </Typography>


          </Card>
        </Container>
    );
}

export default LearnDetail;
