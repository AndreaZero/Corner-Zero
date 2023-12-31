import React, { useState, useEffect } from 'react';
import PostHome from './components/PostHome';
import { Card, Button, Container, Tooltip, TextField, Input } from '@mui/material';
import corner from "../../styles/img/corner.png";
import cornerright from "../../styles/img/cornerright.png";
import learnData from '../../data/learn';
import LastFivePosts from './components/LastFivePosts';
import { Tilt } from 'react-tilt'
import axios from "axios";
import "../../styles/home.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import LastFiveLikedPosts from './components/LastFiveLikedPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGreaterThan, faHandsWash, faHandshake } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
  const [postCount, setPostCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  const controls = useAnimation();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

  

  function getRandomLearnTitle() {
    const randomItem = learnData[Math.floor(Math.random() * learnData.length)];
    return randomItem.title;
}
const randomTitle = getRandomLearnTitle();

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
      width: isMobile ?  '350px' : undefined, 
    }}>

<style>
          {`
            .Toastify__toast-theme--light {
                background-color: #0E0E0E;
                color: #5CB574;
                box-shadow: 0px 0px 5px 0px #5cb574;
            },
        `}
</style>
    
                      
      

<div style={{height: '50px', marginTop: '0.1rem', display: "flex",  borderBottom: '1px solid #5cb574', justifyContent: 'space-between', alignItems: "center"}}>
           <h5 style={{color: '#5cb574'}}> 
              <a style={{fontSize: isMobile ? '10px' : undefined, color: "#5cb574"}} href='/corners'>Dive into the Corners 
              <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGreaterThan}></FontAwesomeIcon></a>
           </h5>
           <h5 style={{color: '#5cb574'}}> 
   <a style={{fontSize: isMobile ? '10px' : undefined, color: "#5cb574"}} href={`/learn/${randomTitle}`}>Random Lesson
      <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGraduationCap}></FontAwesomeIcon>
   </a>
</h5>
</div>


      
    <h1 style={{textAlign: 'center', fontSize: isMobile ? '18px' : undefined}}>
    Explore, learn, dream, live!
  </h1>


  <Tilt options={{ max: isMobile ? '0' : '35' }}>

    <Container className='bg-home'>
  <Card
      style={{
        backgroundColor: "transparent",
        color:"white",
        boxShadow: "none",
        width: "auto",
        padding: '30px',
        textAlign: 'center',
      }}
    >
                        <h4>Welcome Human!</h4>
                        <h5>
              Please let me <a style={{color: '#5cb574'}} href='/about'>introduce myself</a>
              <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faHandshake}></FontAwesomeIcon><br />
              <br />
            This is my portfolio/blog website.    <br />
            Here I write <span style={{fontStyle: 'italic'}}>Corners</span>, 
            publish my projects, <br /> also help people understand web tecnologies.
            <h4>Subscribe to the newsletter to stay updated.</h4></h5>

            <ToastContainer/>
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
        <h6 style={{color: '#5CB574'}}>By joining the Cornerlist, <br />you accept to receive email from newsletter@cornerzero.eu</h6>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}> 
      <Input 
        type="email" 
        value={userEmail} 
        style={{height: '40px', borderRadius: "0.4rem", padding: '5px'}}
        onChange={e => setUserEmail(e.target.value)} 
        placeholder="Your email..." 
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
      <div style={{ display: 'flex', width: isMobile ? "100%" : undefined, justifyContent: 'space-between'}}>

      <h6>
          <img style={{ width: "15px", objectFit: 'contain' }} alt='corner' src={corner}></img>- Corners: {postCount}
        </h6>
        <h6>
        Time: {currentTime.toLocaleTimeString()} - 
        <img style={{ width: "15px", objectFit: 'contain' }} alt='corner' src={cornerright}></img>

        </h6>
          </div>

          </Container>
          </Tilt>

          <div style={{marginTop: "1rem", border: '1px solid #5cb574'}}></div>
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
