import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import loadingImage from "../../styles/img/logo.png"; // Assicurati che il percorso sia corretto
import { Container } from "@mui/material";
import { useMediaQuery } from '@mui/material';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) return prevProgress + 2.5;
        clearInterval(timer);
        return prevProgress;
      });
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
  };

  const progressBarStyle = {
    height: "10px",
    width: "300px",
    background: "black",
    boxShadow: '0px 0px 3px 0px #5cb574',
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  };

  const fillBarStyle = {
    height: "100%",
    width: `${progress}%`,
    background: "#5cb574",
    position: "absolute",
    left: 0,
  };

  return (
    <Container style={{
            display: 'flex',
            marginTop: "5rem",
            flexDirection: "column",
            width: isMobile ?  '350px' : undefined, 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "black",
          }}>
      <motion.img
        src={loadingImage}
        alt="Caricamento..."
        initial={{ opacity: 0.5, scale: 0.2 }}
        animate={{ opacity: 1, scale: 0.5 }}
        transition={{ duration: 1, yoyo: Infinity }}
      />
      <div style={progressBarStyle}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          style={fillBarStyle}
        ></motion.div>
      </div>
    </Container>
  );
};

export default LoadingScreen;
