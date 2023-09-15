import React, { useState, useEffect } from 'react';
import PostHome from '../components/PostHome';
import { Card, Button, Container, Tooltip } from '@mui/material';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import learnData from '../data/learn';
import LastFivePosts from "../components/LastFivePosts";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import bannerzero from "../styles/img/banner-zero.png";
import LastFiveLikedPosts from '../components/LastFiveLikedPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
  const [postCount, setPostCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const mobileWidth = 600;
  const controls = useAnimation();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  

  function getRandomLearnId() {
    const randomItem = learnData[Math.floor(Math.random() * learnData.length)];
    return randomItem.id;
}
const randomId = getRandomLearnId();

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
        const response = await axios.post('/api/newsletter/subscribe', { email: userEmail });
        
        if (response.data === 'Already subscribed') {
          toast.error('You are already subscribed!');
        } else {
          toast.success('Thank you for subscribing!');
          setShowEmailInput(false);
          setUserEmail('');
        }
        
      } catch (error) {
        console.error('Error subscribing to the newsletter:', error);
        toast.error('There was an error. Please try again later.');
      }
    } else {
      toast.warn('Please enter a valid email.');
    }
  };


  useEffect(() => {
    const hasSubscribed = localStorage.getItem('hasSubscribed');

    if (!hasSubscribed) {
      setShowNewsletterPopup(true);
      localStorage.setItem('hasSubscribed', 'true');
    }
  }, []);

  const closeNewsletterPopup = () => {
    setShowNewsletterPopup(false);
  };
  
  

  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: "0.3rem",
      width: isMobile ?  '350px' : undefined, 
    }}>
    
                      
       {showNewsletterPopup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          backgroundColor: '#1E1E1E',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          padding: '20px',
          textAlign: "center",
          borderRadius: '8px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)'
        }}>
          <h3>Join the CornerLetter.</h3>
          <p>Receive email that you actually want to receive.</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:" center" }}> 
            <input 
              type="email" 
              value={userEmail} 
              onChange={e => setUserEmail(e.target.value)} 
              placeholder="Your email..." 
              style={{ padding: '5px', borderRadius: '5px', fontFamily: "Roboto Mono" }}
            />
            <Button 
              style={{ backgroundColor: '#5cb574', color: 'black', fontWeight: 'bold', marginLeft: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              onClick={handleEmailSubmission}
            >
              SUBSCRIBE
            </Button>
            <Button onClick={closeNewsletterPopup} style={{ backgroundColor: '#183D3D', color: '#5cb574', marginLeft: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Close</Button>

          </div>
        </div>
      )}

<Container style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: isMobile ? 'column' : 'row'
}}>
    <h2 style={{ textAlign: 'center', margin: isMobile ? '10px 0' : '0 10px' }}>
    Explore, learn, dream, live!
  </h2>
  <img 
    src={bannerzero} 
    alt='bannerzero' 
    style={{
      height: isMobile ? "70px" : "120px", 
      objectFit: "contain"
    }}
  ></img>

</Container>


<Card
                        style={{
                            backgroundColor: "transparent",
                            color:"white",
                            width: "auto",
                            padding: '10px',
                            textAlign: 'center',
                        }}>
                        Welcome Human!
                          <br />
                          <span style={{fontSize: "12px", fontWeight: "bold"}}>CornerZero is my personal space</span>
                        <br />
                        <h5>
              Please let me <a href='/about'>introduce myself</a>
            <br />
            Here I write <span style={{fontStyle: 'italic'}}>Corners</span>, 
            publish my projects, <br /> also help people understand web tecnologies.
            <h4>Subscribe to my newsletter to updated.</h4></h5>

            <ToastContainer />
            {!showEmailInput ? (
           <Tooltip title="Open form">
          <Button style={{
            backgroundColor: '#183D3D',
            height: '25px',
            color: '#5cb574',
            boxShadow: "0px 0px 3px 0px #5CB574", 
            fontSize: "12px"
          }} size="small"
      onClick={() => setShowEmailInput(true)}
    >
      Join the Corner!
    </Button>
    </Tooltip>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center",  flexDirection: 'column'}}> 
        <h6 style={{color: '#5CB574'}}>By joining the Cornerlist, <br />you accept to receive email from info@cornerzero.eu</h6>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}> 
      <input 
        type="email" 
        value={userEmail} 
        onChange={e => setUserEmail(e.target.value)} 
        placeholder="Your email..." 
        style={{ padding: '5px', borderRadius: '5px', fontFamily: "Roboto Mono"}}
      />
      <Tooltip title='Enter the Corner'>
        <Button 
        style={{boxShadow: "0px 0px 3px 0px #5CB574", backgroundColor: '#183D3D', color: 'white', marginLeft: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        onClick={handleEmailSubmission}
      >
        JOIN
      </Button>
      </Tooltip>
</div>
      </div>
      )}
</Card>  
<div style={{display: "flex", justifyContent: 'space-between', flexDirection: isMobile ? 'column' : undefined,  alignItems: "center"}}>
           <h5 style={{color: '#5cb574'}}> 
              <a style={{color: "#5cb574"}} href='/corners'>Dive into the Corners 
              <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGreaterThan}></FontAwesomeIcon></a>!
           </h5>
           <h5 style={{color: '#5cb574'}}> 
   <a style={{color: "#5cb574"}} href={`/learn/${randomId}`}>Random Lesson
      <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGraduationCap}></FontAwesomeIcon>
   </a>
</h5>
</div>

      <div style={{ display: 'flex', width: isMobile ? "100%" : undefined, justifyContent: 'space-between', borderBottom: "1px solid #5CB574 " }}>


      <h6>
          <img style={{ width: "15px", objectFit: 'contain' }} alt='corner' src={corner}></img>- Corners: {postCount}
        </h6>
        <h6>
        Time: {currentTime.toLocaleTimeString()} - 
        <img style={{ width: "15px", objectFit: 'contain' }} alt='corner' src={cornerright}></img>

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
    </div>
  );
}

export default Homepage;
