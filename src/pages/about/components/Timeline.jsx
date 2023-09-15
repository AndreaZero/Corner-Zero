import React from 'react';
import { Chrono } from 'react-chrono';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from "framer-motion";
import { Container, Typography } from '@mui/material';

const Timeline = () => {

  function isMobile() {
    return window.innerWidth <= 600;
  }

const cardWidthValue = isMobile() ? undefined : '500';

  

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

  const items = [
    {
      title: "Dec 2021",
      cardTitle: "Starting the journey!",
      cardDetailedText: "Back in 2017, I started my crypto journey but due my premature age, I quit too early. Then i joined NFTs and suddenly I started to studying Dapps and Web3 tools, cause I loved the tecnologies behind and the main goal of decentralization. So my trip start here!",
    },
    {
      title: "Feb. 2022",
      cardTitle: "My first job as developer in web3 space.",
      cardDetailedText: "I co-founded the first italia rap NFT project with DJ Gengis Khan & Noyz Narcos.",
     
    },
    {
      title: "Summer 2022",
      cardTitle: "Degen time & testing",
      cardDetailedText: "In this timeframe I spent the days searching for infos about web development and potential apps to build. Every day I started to learn more and more and the results got me incredbly inspired to move on!",
     
    },
    {
      title: "Today",
      cardTitle: "Took some serious decision.",
      cardDetailedText: "I want to make this passions my main job. I'm deeply focusued day by day on studing programming languages and frameworks, libreries, and more. I decided to build CornerZero to share my thoughts about all the things of life, not only code. See you in the Corner.",
     
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fade}>
      <Container style={{padding: "20px", backgroundColor: '#0e0e0e', borderRadius: '1rem',
        width: isMobile ? '100%' : undefined, justifyContent: 'center', alignItems: "center", flexDirection: 'column'
      }}>
                      <Typography style={{ marginBottom: "3rem",textAlign: 'center', color: 'white', fontSize: "25px", fontWeight: 'bold' }}>
                  Timeline
                  <FontAwesomeIcon icon={faTimeline} style={{ marginLeft: "8px" }}></FontAwesomeIcon>
              </Typography>
        <style>
          {`
        .TimelineContentDetails-sc-d7qjm1-5.iSsTMA {
          padding: 10px; 
          border-top: 1px solid white;
        }
        .TimelineControlContainer-sc-cif21b-4.bMJdTO {
          border-radius: 1rem;
        }
        .TimelineItemContentWrapper-sc-d7qjm1-0.gkXdO {
          background-color: #183d3d;
          padding: 10px;
        }
        .TimelineMainWrapper-sc-cif21b-1.bpnhik {
        }
        .TimelineNavWrapper-sc-1apb8f9-0.jROSZr {
          background-color: #0e0e0e;
          gap: 0.6rem;
          border-radius: 1rem;
        }
        .TimelineNavButton-sc-1apb8f9-2.ilFrD {
          background-color: #183d3d;
          color: #5cb574;
        }
        `}
        </style>
      <Chrono
        mediaSettings={{ align: 'center', fit: 'contain',}}
        items={items}
        timelinePointShape='diamond'
        useReadMore
        cardWidth={cardWidthValue}
        theme={{
          primary: '#5cb574',
          secondary: '#183d3d',
          cardTitleColor: '#5cb574',
          cardBgColor: '#183d3d',
          cardDetailsColor: 'white',
          cardSubtitleColor: 'white',
          titleColor: '#0e0e0e',
          titleColorActive: 'white',
        }}
        slideShow
        mode="HORIZONTAL">
        </Chrono>
        </Container>
    </motion.div>
  );
};

export default Timeline;
