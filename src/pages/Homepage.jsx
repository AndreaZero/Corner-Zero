import React, { useState, useEffect } from 'react';
import PostHome from '../components/PostHome';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import LastFivePosts from "../components/LastFivePosts";
import axios from "axios";
import { TextField, useMediaQuery } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import bannerzero from "../styles/img/banner-zero.png";
import Footer from '../components/fixed/Footer';
import { Button } from '@mui/material';
import LastFiveLikedPosts from '../components/LastFiveLikedPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
  const [postCount, setPostCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const mobileWidth = 600;
  const controls = useAnimation();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [userEmail, setUserEmail] = useState('');


  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

  const [currentText, setCurrentText] = useState('');
  const fullText = "Explore, learn, dream, live!";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setCurrentText(prevText => prevText + fullText[index]);
      index++;

      if (index > fullText.length - 1) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);



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
      clearInterval(interval); 
    };
  }, []);

  const handleEmailSubmission = async () => {
    if (userEmail) {
      try {
        await axios.post('/api/newsletter/subscribe', { email: userEmail });
        alert('Thank you for subscribing!');
        setShowEmailInput(false);
        setUserEmail('');
      } catch (error) {
        console.error('Error subscribing to the newsletter:', error);
        alert('There was an error. Please try again later.');
      }
    } else {
      alert('Please enter a valid email.');
    }
  };
  

  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between",
      width: isMobile ?  '350px' : undefined, 
    }}>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        fontSize: isMobile ? '14px' : undefined
      }}>
{
  isMobile ? (
    <>
          <h1>{currentText}</h1>

    </>
  ) : (
    <>
          <h1>{currentText}</h1>

    </>
  )
}

        <div style={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
        <h5 style={{color: '#5cb574'}}>Dive into the Corners 
          <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGreaterThan}></FontAwesomeIcon>!
          Instant access.</h5>
          {!isMobile && ( 
          <img src={bannerzero} alt='bannerzero' style={{height: "80px", objectFit: "contain"}}></img>
          )}
          </div>
      </div>

      <div style={{ display: 'flex', width: isMobile ? "100%" : undefined, justifyContent: 'space-between', borderBottom: "1px solid #5CB574 " }}>

        <h6>
        Time: {currentTime.toLocaleTimeString()}
        </h6>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  {!showEmailInput ? (
          <Button style={{
            backgroundColor: '#183D3D',
            height: '30px',
            marginTop: "8px"
          }} size="small" color="primary"
      onClick={() => setShowEmailInput(true)}
    >
      Join the Corner!
    </Button>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center' }}> 
      <input 
        type="email" 
        value={userEmail} 
        onChange={e => setUserEmail(e.target.value)} 
        placeholder="Your email..." 
        style={{ padding: '5px', borderRadius: '5px', fontFamily: "Roboto Mono"}}
      />

      <Button 
        style={{ backgroundColor: '#183D3D', color: 'white', marginLeft: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        onClick={handleEmailSubmission}
      >
        JOIN
      </Button>
    </div>
  )}

  
</div>

      </div>


<div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}}>
      <h6>
          <img style={{ width: "15px", objectFit: 'contain' }} alt='corner' src={corner}></img>- Corners: {postCount}
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
