import React, { useState, useEffect } from 'react';
import PostHome from '../components/PostHome';
import { Card, Button, Container } from '@mui/material';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import it from "../styles/img/it.png";
import LastFivePosts from "../components/LastFivePosts";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import bannerzero from "../styles/img/banner-zero.png";
import mehi from "../styles/img/mehi.png";
import LastFiveLikedPosts from '../components/LastFiveLikedPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
  const [postCount, setPostCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const mobileWidth = 600;
  const controls = useAnimation();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false); // State for the popup
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  const [currentText, setCurrentText] = useState('');
  const fullText = "Explore, learn, dream, live!";

  const reflectionStyle = {
    textShadow: '8px 18px 7px rgba(255, 255, 255, 0.15)'
};

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
        const response = await axios.post('/api/newsletter/subscribe', { email: userEmail });
        
        // Controllo se l'utente è già iscritto
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
    // Check local storage to see if the user has already been prompted to subscribe
    const hasSubscribed = localStorage.getItem('hasSubscribed');

    if (!hasSubscribed) {
      setShowNewsletterPopup(true); // Show the popup if the user hasn't been prompted before
      localStorage.setItem('hasSubscribed', 'true'); // Set the value in local storage to prevent showing the popup again
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
              Please give me a minute to <a href='/about'>introduce myself!</a>
            <br />
            Here I write <span style={{fontStyle: 'italic'}}>Corners</span>, 
            publish my projects, <br /> and also help people understand web tecnologies.
            <br/>
            <h4>Subscribe to my newsletter to updated.</h4></h5>

            <ToastContainer />
            {!showEmailInput ? (
          <Button style={{
            backgroundColor: '#183D3D',
            height: '25px',
            color: '#5cb574',
            fontSize: "12px"
          }} size="small"
      onClick={() => setShowEmailInput(true)}
    >
      Join the Corner!
    </Button>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}> 
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

                                </Card>
                                

      <div style={{
        display: 'flex',
        alignItems: "center",
        padding: "10px",
        justifyContent: "space-between",
        fontSize: isMobile ? '12px' : undefined
      }}>
{
  isMobile ? (
    <>
          <h1>{currentText}</h1>
    </>
  ) : (
    <>
          <h2>{currentText}</h2>
          {!isMobile && ( 
          <img src={bannerzero} alt='bannerzero' style={{height: "70px", objectFit: "contain"}}></img>
          )}

    </>
  )
}
</div>
        <div style={{display: "flex", justifyContent: 'space-between', flexDirection: isMobile ? 'column' : undefined,  alignItems: "center"}}>
        <h5 style={{color: '#5cb574'}}>Dive into the Corners 
          <FontAwesomeIcon style={{ marginLeft: "8px", marginRight: "5px" }} icon={faGreaterThan}></FontAwesomeIcon>!
          </h5>
          <h5>Instant access.</h5>

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
