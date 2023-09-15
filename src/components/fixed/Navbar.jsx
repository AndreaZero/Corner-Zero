import { AppBar, Hidden, Toolbar, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, IconButton, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {experiences} from "../../data/experiences";
import logo from "../../styles/img/logo.png";
import iconright from "../../styles/img/iconright.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faListUl, faHome, faGreaterThan, faLaptopCode, faEnvelope, faGraduationCap, faAddressCard, faCoffee } from '@fortawesome/free-solid-svg-icons';
import learn from '../../data/learn';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const [posts, setPosts] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false); 
  const randomIndex = Math.floor(Math.random() * learn.length);
  const randomLearnItem = learn[randomIndex];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };


  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('/api/posts');
        if (response.data && response.data.length > 0) {
          setPosts(response.data.slice(0, 1));
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
        <AppBar style={{
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0e0e0e',
        fontWeight: 'bold',
        height: '60px',
        display: 'flex',
      }} position="fixed">

        <Container style={{
          display: 'flex',
          color: "white",
          fontWeight: 'bold',
          alignItems: "center",
          gap: isMobile ? undefined : "2rem",
          justifyContent: isMobile ? 'space-around' : "center"
        }}>
      
          <a href='/'>
            <img style={{
              width: isMobile ? '40px' : '40px',
              objectFit: 'contain'
            }} src={isMobile ? iconright : iconright} alt='logo'></img> 
          </a>

          <Hidden smDown> |
            <Link style={{ color: '#5CB574' }} to='/corners'>Corners</Link> - 
            <Link style={{ color: '#5CB574' }} to='/about'>WhoIam</Link> -
            <Link style={{ color: '#5CB574' }} to='/repos'>Repos</Link> -  
            <Link style={{ color: '#5CB574' }} to='/learn'>Learn</Link> - 
            <Link style={{ color: '#5CB574' }} to='/contacts'>Contact</Link> |
          </Hidden>

          <Box style={{
            width: "auto",
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            gap: isMobile ? "0.7rem" : '0.3rem',
            color: "white",
            borderRadius: "0.3rem"
          }}>
            <a href="https://x.com/Andrea__Zero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faXTwitter}></FontAwesomeIcon></a> •
            <a href="https://github.com/AndreaZero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faGithub}></FontAwesomeIcon></a>•
            <a href="https://ko-fi.com/andreazero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faCoffee}></FontAwesomeIcon></a>
          </Box>

          {isAuthenticated && (
            <Box>
              <Link style={{ color: "#5CB574" }} to="/admin/dashboard">DASH</Link>
            </Box>
          )}

          {isMobile && (

            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              
              <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>
            </IconButton>

          )}

        </Container>
        
        <Drawer
          anchor={"right"}
          open={open}
          onClose={handleDrawerToggle}
        >
          <List style={{width: 250, height: "100%",backgroundColor: 'black', borderLeft :"1px solid #5CB574"}}>
            <center>
          <img src={logo} alt='logo' style={{width: "200px", alignItems: "center"}}></img>
          </center>
          <Box style={{
            width: "auto",
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            padding: '5px',
            color: "white",
            borderRadius: "0.3rem"
          }}>
            <h3 style={{color: 'white', textAlign: "center"}}>Menu</h3>

        </Box>
          <ListItem button key="Home" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/" onClick={handleDrawerToggle}>
            <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faHome}></FontAwesomeIcon>
            <ListItemText primary="Home" />
        </ListItem>

        <ListItem button key="About" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/about" onClick={handleDrawerToggle}>
            <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faAddressCard}></FontAwesomeIcon>
            <ListItemText primary="About" />
          </ListItem>

          <ListItem button key="Corners" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/corners" onClick={handleDrawerToggle}>
            <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faGreaterThan}></FontAwesomeIcon>
            <ListItemText primary="Corners" />
          </ListItem>

          <ListItem button key="Repos" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/repos" onClick={handleDrawerToggle}>
            <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faLaptopCode}></FontAwesomeIcon>
            <ListItemText primary="Repos" />
          </ListItem>

          <ListItem button key="Learn" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/learn" onClick={handleDrawerToggle}>
            <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faGraduationCap}></FontAwesomeIcon>
            <ListItemText primary="Learn" />
          </ListItem>

          <ListItem button key="Contact Me" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/contacts" onClick={handleDrawerToggle}>
            <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faEnvelope}></FontAwesomeIcon>
            <ListItemText primary="Contact Me" />
          </ListItem>

            <h3 style={{color: '#5CB574', textAlign: "center"}}>What's New?</h3>

          <Box style={{
               background: 'rgb(0,0,0)',
               marginTop: "1rem",
               color: "#5CB574",
               background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)'
            }}>
            {posts.map(post => (
              <ListItem key={post.id} post={post} style={{borderBottom: '1px solid #183D3D'}} component={Link} to={`/posts/${post.title}`} onClick={handleDrawerToggle}>
  <ListItemText primary={post.title} />   
</ListItem>

          ))}
          </Box>

          <h3 style={{color: '#5CB574', textAlign: "center"}}>Random lesson:</h3>
         
              <Box style={{
        background: 'rgb(0,0,0)',
        marginTop: "1rem",
        color: "#5CB574",
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)'
      }}>
        <ListItem key={randomLearnItem.id} style={{ borderBottom: '1px solid #183D3D' }} component={Link} to={`/learn/${randomLearnItem.id}`}  onClick={handleDrawerToggle}>
          <ListItemText primary={randomLearnItem.title} />
         </ListItem>
    </Box>


          </List>
          
        </Drawer>
</AppBar>
</>
  );
}

export default Navbar;
