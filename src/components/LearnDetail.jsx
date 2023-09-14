import { Container, Typography, Card, CardMedia } from '@mui/material';
import learnData from '../data/learn';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import ReactMarkdown from 'react-markdown';


import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import learn from '../data/learn';

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
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            gap: "1rem",
            width: isMobile ?  'auto' : undefined
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
              <Card
              style={{
                backgroundColor: '#183D3D',
                height: 'auto',
                width: isMobile ? '100%': '500px',
                alignItems: 'center',
                justifyContent: "center",
                overflow: 'hidden',
                gap: "1rem",
                padding: '20px',
                boxShadow: '0px 0px 5px 0px #183d3d',
              }}
            >
<Typography
  dangerouslySetInnerHTML={{ __html: learnItem.content }}
></Typography>

            <center>
            <CardMedia
                            image={learnItem.images}
                            alt={learnItem.title}
                            component="img"
                            style={{
                                width: '300px',
                                objectFit: "contain",
                                borderRadius: "0.5rem",
                                boxShadow: '0px 0px 4px 0px #183d3d'
                            }}
                        />
            </center>

            <Typography
  dangerouslySetInnerHTML={{ __html: learnItem.content2 }}
></Typography>
            </Card>

        </Container>
    );
}

export default LearnDetail;
