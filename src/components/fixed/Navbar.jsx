import { AppBar, Hidden, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from "../../styles/img/logo.png";
import zeroicon from "../../styles/img/zero-icon.png";
import bannerzero from "../../styles/img/banner-zero.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,  faLinkedin, faXTwitter }  from '@fortawesome/free-brands-svg-icons'; 

function Navbar() {
  const { isAuthenticated } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Questo diventerà 'true' per dimensioni di schermo piccole

  return (
      <Box style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          alignItems: 'center',
          borderBottom: '1px solid grey',
          justifyContent: 'center'
      }} top={0} left={0} right={0} zIndex={1200}>
          <AppBar style={{
              color: "white",
              fontWeight: 'bold',
              padding: '10px',
              height: isMobile ? '80px' : '100px',  // Riduci l'altezza per mobile
              display: 'flex',
          }} position="static">
              <Toolbar style={{
                  display: 'flex',
                  gap: "2rem",
                  justifyContent: "space-between"
              }}>
                <a href='/'>
                  <img style={{
                      width: isMobile ? '120px' : '200px',  // Riduci la larghezza del logo per mobile
                      objectFit: 'contain'
                  }} src={logo} alt='logo'></img>
                  </a>

                      <Link style={{ color: '#5CB574' }} to='/'>Home</Link>
                      <Link style={{ color: '#5CB574' }} to='/corners'>Corners</Link>
                      <Link style={{ color: '#5CB574' }} to='/repos'>Repos</Link>
                      <Link style={{ color: '#5CB574' }} to='/contacts'>Contact Me</Link>


                  {isAuthenticated && (
                      <Box>
                          <Link style={{ color: "#5CB574" }} to="/admin/dashboard">DASH</Link>
                      </Box>
                  )}

                  <Box style={{
                      width: "auto",
                      display: 'flex',
                      alignItems: "center",
                      justifyContent: 'center',
                      padding: '5px',
                      gap: "0.4rem",
                      color: "white",
                      borderRadius: "0.3rem"
                  }}>
                      <FontAwesomeIcon color='white' icon={faXTwitter}></FontAwesomeIcon> •
                      <FontAwesomeIcon color='white' icon={faGithub}></FontAwesomeIcon> •
                      <FontAwesomeIcon color='white' icon={faLinkedin}></FontAwesomeIcon>
                  </Box>
              </Toolbar>
          </AppBar>
      </Box>
  );
}

export default Navbar;
