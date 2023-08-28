import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SidebarLeft from "../components/fixed/SidebarLeft";
import SidebarRight from "../components/fixed/SidebarRight";
import PostHome from '../components/PostHome';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import LastFivePosts from "../components/LastFivePosts";
import axios from "axios";
import icon from "../styles/img/icon-small.png";
import Footer from '../components/fixed/Footer';
import LastFiveLikedPosts from '../components/LastFiveLikedPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Homepage() {

  const [postCount, setPostCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    async function fetchPostCount() {
      try {
        const response = await axios.get('/api/posts/count');
        setPostCount(response.data.totalPosts);
      } catch (error) {
        console.error('Error fetching post count:', error);
      }
    }
  
    fetchPostCount();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);

    return () => {
        clearInterval(interval);  // Pulisci l'intervallo quando il componente viene smontato
    };
}, []);

  

  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 'auto', // Assicurati che il contenitore principale occupi l'intera altezza della viewport
    }}>
<div style={{
  display: 'flex',
  flexDirection: "column",
  lineHeight: "0"
}}>
<h1>Explore, learn, imagine, think, dream, live!</h1>
<h5>Dive into the Corners 
  <FontAwesomeIcon style={{marginLeft: "8px", marginRight: "5px"}} icon={faGreaterThan}></FontAwesomeIcon>!
  Instant access, registration-free.</h5>
</div>
      <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: "1px solid #5CB574 "}}>
        
      <h6>
      <img style={{width: "15px", objectFit: 'contain'}} src={corner}></img>
     - Date: {currentTime.toLocaleDateString()}
</h6>
<h6>
  <img style={{width: "15px", objectFit: 'contain'}} src={corner}></img>  &lt; Corners: {postCount} &gt;
  <img style={{width: "15px", objectFit: 'contain'}} src={cornerright}></img>

</h6>

<h6>
    Time: {currentTime.toLocaleTimeString()} -
    <img style={{width: "15px", objectFit: 'contain'}} src={cornerright}></img>
</h6>


</div>


      
      <div style={{ flex: 1 }}> {/* Questo div conterrà tutto tranne il footer */}
        <div style={{
          display: 'flex',
          gap: '5rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  
          <PostHome />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',

            alignItems: 'center'
          }}>
          <LastFivePosts />
          <div style={{borderBottom: '1px solid #5CB574', width: '50%', marginBottom: '1rem'}}></div>
          <LastFiveLikedPosts />
          </div>
        </div>
        
      </div>

      <Footer /> {/* Footer fuori dal div principale */}
    </div>
  );
}

export default Homepage;
