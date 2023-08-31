import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
      <Container style={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h5>© 2023 dev by AndreaZero.</h5>
          <h6><a href='http://paypal.me/andreazero/' target='black' rel='noopener noreferrer'>Support me <FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon> </a></h6>
      </Container>
  );
};

export default Footer;
