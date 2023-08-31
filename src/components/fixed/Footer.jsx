import React from 'react';
import { Container, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop: "1.5rem"
      }}
    >
      <Container style={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h2>
          © 2023 dev by AndreaZero.</h2>
          <h4><a href='http://paypal.me/andreazero/' target='black' rel='noopener noreferrer'>Support me <FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon> </a></h4>
      </Container>
    </Box>
  );
};

export default Footer;
