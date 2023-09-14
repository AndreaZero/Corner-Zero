import React from 'react';
import { Chrono } from 'react-chrono';
import { motion, useAnimation } from "framer-motion";
import { Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import banner from  "../../styles/img/banner-zero.png";

const Timeline = () => {
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

  const items = [
    {
      title: "Dec 2021",
      cardTitle: "Starting the journey!",
      cardDetailedText: "Back in 2017, I started my crypto journey but due my premature age, I quit too early. Then i joined NFTs and suddenly I started to studying Dapps and Web3 tools, cause I loved the tecnologies behind and the main goal of decentralization. So my trip start here!",
      media: {
        name: "dunkirk beach",
        source: {
          url:
            `${banner}`
        },
        type: "IMAGE"
      },
    },
    {
      title: "Feb. 2022",
      cardTitle: "My first job as developer in web3 space.",
      cardDetailedText: "I co-founded the first italia rap NFT project with DJ Gengis Khan & Noyz Narcos.",
      media: {
        name: "dunkirk beach",
        source: {
          url:
            `${banner}`
        },
        type: "IMAGE"
      },
    },
    {
      title: "Summer 2022",
      cardTitle: "Degen time & testing",
      cardDetailedText: "In this timeframe I spent the days searching for infos about web development and potential apps to build. Every day I started to learn more and more and the results got me incredbly inspired to move on!",
      media: {
        name: "dunkirk beach",
        source: {
          url:
            `${banner}`
        },
        type: "IMAGE"
      },
    },
    {
      title: "Today",
      cardTitle: "Took some serious decision. I want to make this passions my main job. I'm deeply focusued day by day on studing programming languages and frameworks, libreries, and more. I decided to build CornerZero to share my thoughts about all the things of life, not only code. See you in the Corner.",
      cardDetailedText: "Dettaglio del testo 1",
      media: {
        name: "dunkirk beach",
        source: {
          url:
            `${banner}`
        },
        type: "IMAGE"
      },
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fade}>
      <center>
    <Container style={{ width: isMobile ? 'auto': 'auto', justifyContent: "center", alignItems: "center"}}>
      <Chrono
        mediaSettings={{ align: 'center', fit: 'contain' }}
        items={items}
        lineWidth={2}
        cardWidth={700}
        timelinePointShape='diamond'
        useReadMore
        theme={{
          primary: '#5cb574',
          secondary: '#183d3d',
          cardBgColor: '#183d3d',
          cardTitleColor: '#5cb574',
          cardDetailsColor: 'white',
          cardSubtitleColor: 'white',
          titleColor: 'black',
          titleColorActive: 'white',
        }}
        slideShow
        mode="HORIZONTAL">
         
        </Chrono>
      

    </Container>
    </center>
    </motion.div>
  );
};

export default Timeline;
