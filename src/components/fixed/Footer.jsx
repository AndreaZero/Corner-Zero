import React from 'react';
import { Container, Typography, Box } from '@mui/material';

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
      <Container>
        <Typography align="center" variant="body2">
          © 2023 dev by AndreaZero. <a href='http://paypal.me/andreazero/'>Support me</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
