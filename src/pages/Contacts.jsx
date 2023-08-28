import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, Grid } from '@mui/material';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faPaypal, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';


function Contacts() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

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
                alert('Grazie per avermi contattato!');
                // Resetta il modulo
                setEmail('');
                setMessage('');
            } else {
                alert('Si è verificato un errore. Riprova.');
            }
        } catch (error) {
            console.error('There was an error sending the message:', error);
            alert('Si è verificato un errore. Riprova.');
        }
    };
    return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
        }}>
            <Typography variant="h4" style={{ textAlign: 'center', color: 'white' }}>Send me a message!
            <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faEnvelope}></FontAwesomeIcon>
            </Typography>
            
            <Box style={{
                boxShadow: '0px 0px 4px 0px white',
                padding: "30px",
                backgroundColor: '#183D3D',
                borderRadius: "1rem",
                marginBottom: '2rem',
            }}>
                <Typography variant="h6" style={{ color: 'white', marginBottom: '1rem' }}>Ask me anything, or reach me for serious requests.</Typography>

                <TextField
                    fullWidth
                    style={{ marginBottom: '1rem' }}
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    fullWidth
                    type='text'
                    multiline
                    rows={4}
                    placeholder="Type your message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <Button style={{ marginTop: '1rem' }} variant="contained" color="primary" onClick={handleSubmit}>
                    Invia
                </Button>
            </Box>

            <Box style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '100%'
            }}>
            <Typography variant="h6" style={{ color: 'white', marginBottom: '1rem' }}>
                <FontAwesomeIcon style={{marginRight: "10px"}} icon={faLink}></FontAwesomeIcon>
                links:
                </Typography>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    gap: "5rem",
                    alignItems: 'center',
                    width: "100%",
                }}>

                    <Typography style={{ color: 'white', fontSize: "14px" }}>
                        <FontAwesomeIcon style={{marginRight: "8px"}} icon={faEnvelope}></FontAwesomeIcon>
                        Email - <Link href="mailto:andreazero@cornerzero.it" style={{color: '#5CB574'}}>andreazero@cornerzero.it</Link></Typography>
                    <Typography style={{ color: 'white', fontSize: "14px"  }}>
                    <FontAwesomeIcon style={{marginRight: "8px"}} icon={faXTwitter}></FontAwesomeIcon>
                    <Link href="https://twitter.com/Andrea__Zero" target="_blank" style={{color: '#5CB574'}}>@Andrea__Zero</Link></Typography>

                    <Typography style={{ color: 'white', fontSize: "14px"  }}>
                    <FontAwesomeIcon style={{marginRight: "8px"}} icon={faGithub}></FontAwesomeIcon>
                        GitHub: <Link href="https://github.com/AndreaZero" target="_blank" style={{color: '#5CB574'}}>AndreaZero</Link></Typography>
            </div>
            <Typography variant="h6" style={{ color: 'white', marginTop: "2rem" }}>
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
            </Box>
        </Container>
    );
}

export default Contacts;
