import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
      <Container style={{display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center"}}>
        <h5>© 2023 dev by AndreaZero.</h5> - 
          <h5><a style={{textDecoration: "none"}} href='http://paypal.me/andreazero/' target='black' rel='noopener noreferrer'>Support me <FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon> </a></h5>
      </Container>
  );
};

export default Footer;
