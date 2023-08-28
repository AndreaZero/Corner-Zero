import React, { useState, useEffect } from 'react';
import PostHome from '../components/PostHome';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import LastFivePosts from "../components/LastFivePosts";
import axios from "axios";
import { useMediaQuery } from '@mui/material';

import Footer from '../components/fixed/Footer';
import LastFiveLikedPosts from '../components/LastFiveLikedPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { fontSize } from '@mui/system';

function Homepage() {
  const [postCount, setPostCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

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
      clearInterval(interval); // Pulisci l'intervallo quando il componente viene smontato
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between",
      width: isMobile ?  '350px' : undefined,  // Adatta la larghezza su dispositivi mobili
    }}>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        fontSize: isMobile ? '14px' : undefined // Adatta la larghezza su dispositivi mobili

      }}>
{
  isMobile ? (
    <>
          <h1>Explore, learn, imagine, think, dream, live!</h1>
    </>
  ) : (
    <>
          <h1>Explore, learn, imagine, think, dream, live!</h1>

    </>
  )
}


        <h5>Dive into the Corners 
          <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGreaterThan}></FontAwesomeIcon>!
          Instant access, <br />registration-free.</h5>
      </div>

      <div style={{ display: 'flex', width: isMobile ? "300px" : undefined, justifyContent: 'space-between', borderBottom: "1px solid #5CB574 " }}>
        <h6>
          <img style={{ width: "15px", objectFit: 'contain' }} src={corner}></img>  &lt; Corners: {postCount} &gt;
          <img style={{ width: "15px", objectFit: 'contain' }} src={cornerright}></img>
        </h6>
        <h6>
          Time: {currentTime.toLocaleTimeString()} -
          <img style={{ width: "15px", objectFit: 'contain' }} src={cornerright}></img>
        </h6>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? '0' : '5rem',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <PostHome />
          </div>
          {!isMobile && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <LastFivePosts />
              <div style={{ borderBottom: '1px solid #5CB574', width: '50%', marginBottom: '1rem' }}></div>
              <LastFiveLikedPosts />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
