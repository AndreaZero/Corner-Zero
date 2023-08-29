import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, Grid } from '@mui/material';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faPaypal, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { useMediaQuery } from '@mui/material';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";


function Contacts() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    const handleSubmit = async () => {
        try {
            // I dettagli del servizio, del template e dell'utente si possono trovare nella dashboard di EmailJS
            const SERVICE_ID = 'CZERO';
            const TEMPLATE_ID = 'template_xgpvxdj';
            const USER_ID = 'gU_RtDsXhi0IJk2xL';
            
            const templateParams = {
                email: email,
                message: message
            };
    
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    
            if (response.text === "OK") {
                alert('Thanks for message me.');
                // Resetta il modulo
                setEmail('');
                setMessage('');
            } else {
                alert('There was an error. Please try again.');
            }
        } catch (error) {
            console.error('There was an error while sending the message:', error);
            alert('There was an error. Please try again.');
        }
    };
    return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            width: isMobile ?  'auto' : undefined
        }}>
 <Typography style={{
                fontSize: isMobile ? '20px' : '30px',  // Adatta la larghezza su dispositivi mobili
                color: "white",
                fontWeight: 'bolder',
                textAlign: "right",
                marginTop: "1rem"
            }}>
                 Contact Corner - 
                 <img style={{ width: "40px", 
                 objectFit: 'contain' }} src={cornerright} alt='icon'></img>


            </Typography>
            
            <Box style={{
                padding: "30px",
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)',
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography style={{ color: 'white', marginBottom: '1rem', fontSize: "16px" }}>Ask me anything, or reach me for serious requests.</Typography>

                <TextField
                    fullWidth
                    style={{ marginBottom: '1rem'}}
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    style={{
                        width:" 100%",
                    }}
                    type='text'
                    multiline
                    rows={5}
                    placeholder="Type your message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <Button style={{ marginTop: '1rem' }} variant="contained" color="primary" onClick={handleSubmit}>
                    Send message
                </Button>
            </Box>

          
            <Typography variant="h6" style={{ color: 'white'}}>
                Support my work
                <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faPaypal}></FontAwesomeIcon>
                </Typography>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    gap: "5rem",
                    alignItems: 'center',
                    width: "100%",
                }}>
                     <Link href="https://paypal.me/andreazero" target="_blank" color="primary">
                    <Typography style={{ color: '#5CB574' }}>paypal.me/andreazero</Typography>
                </Link>
                    </div>

        </Container>
    );
}

export default Contacts;
