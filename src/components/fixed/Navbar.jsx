import { AppBar, Hidden, Toolbar, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from "../../styles/img/logo.png";
import iconright from "../../styles/img/iconright.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faListUl, faHome, faGreaterThan, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const theme = useTheme();
  const [posts, setPosts] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false); 

  const handleDrawerToggle = () => {
    setOpen(!open);
  };


  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('/api/posts');
        if (response.data && response.data.length > 0) {
          setPosts(response.data.slice(0, 3));
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
        height: isMobile ? '80px' : '100px',
        display: 'flex',
      }} position="static">
        <Toolbar style={{
          display: 'flex',
          gap: "1rem",
          justifyContent: "space-between"
        }}>
          <a href='/'>
            <img style={{
              width: isMobile ? '40px' : '200px',
              objectFit: 'contain'
            }} src={isMobile ? iconright : logo} alt='logo'></img> 
          </a>

          <Hidden smDown> 
            | <Link style={{ color: '#5CB574' }} to='/'>Home</Link> - 
            <Link style={{ color: '#5CB574' }} to='/corners'>Corners</Link> - 
            <Link style={{ color: '#5CB574' }} to='/repos'>Repos</Link> - 
            <Link style={{ color: '#5CB574' }} to='/contacts'>Contact Me</Link> |
          </Hidden>

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
            <a href="https://x.com/Andrea__Zero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faXTwitter}></FontAwesomeIcon></a> •
            <a href="https://github.com/AndreaZero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faGithub}></FontAwesomeIcon></a>•
            <a href="https://instagram.com/cornerzero.eu" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faInstagram}></FontAwesomeIcon></a>
          </Box>

          {isAuthenticated && (
            <Box>
              <Link style={{ color: "#5CB574" }} to="/admin/dashboard">DASH</Link>
              <Button
              style={{
                fontSize: "14px"
              }}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>
            </IconButton>
          )}

        </Toolbar>
        
        <Drawer
          anchor={"right"}
          open={open}
          onClose={handleDrawerToggle}
        >
          <List style={{ width: 250, height: "100%",backgroundColor: 'black', borderLeft :"1px solid #5CB574"}}>
          <h3 style={{color: 'white', textAlign: "center"}}>Menu Corner</h3>
          <Box style={{
            width: "auto",
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            padding: '5px',
            gap: "0.4rem",
            color: "white",
            marginTop: "0.6rem",
            borderRadius: "0.3rem"
          }}>
            <a href="https://x.com/Andrea__Zero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faXTwitter}></FontAwesomeIcon></a> •
            <a href="https://github.com/AndreaZero" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faGithub}></FontAwesomeIcon></a>•
            <a href="https://instagram.com/cornerzero.eu" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon color='white' icon={faInstagram}></FontAwesomeIcon></a>
          </Box>
          <ListItem button key="Home" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/" onClick={handleDrawerToggle}>
  <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faHome}></FontAwesomeIcon>
  <ListItemText primary="Home" />
</ListItem>

<ListItem button key="Corners" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/corners" onClick={handleDrawerToggle}>
  <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faGreaterThan}></FontAwesomeIcon>
  <ListItemText primary="Corners" />
</ListItem>

<ListItem button key="Repos" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/repos" onClick={handleDrawerToggle}>
  <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faLaptopCode}></FontAwesomeIcon>
  <ListItemText primary="Repos" />
</ListItem>

<ListItem button key="Contact Me" style={{borderBottom: '1px solid #183D3D'}} component={Link} to="/contacts" onClick={handleDrawerToggle}>
  <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faEnvelope}></FontAwesomeIcon>
  <ListItemText primary="Contact Me" />
</ListItem>


            <h3 style={{color: '#5CB574', textAlign: "center"}}>What's New?</h3>

          <Box style={{
               background: 'rgb(0,0,0)',
               marginTop: "1rem",
               padding: "5px",
               color: "#5CB574",
               background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)'
            }}>
            {posts.map(post => (
              <ListItem key={post.id} post={post} style={{borderBottom: '1px solid #183D3D'}} component={Link} to={`/posts/${post._id}`} onClick={handleDrawerToggle}>
  <ListItemText primary={post.title} />   
</ListItem>

          ))}
          </Box>

          </List>
          
        </Drawer>
      </AppBar>
    </Box>
  );
}

export default Navbar;
