import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';
import { useMediaQuery } from '@mui/material';
import cornerright from "../styles/img/cornerright.png";
import corner from "../styles/img/corner.png";



function Contacts() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    React.useEffect(() => {
        document.title = "CornerZero - Contact";
        return () => {
          document.title = "CornerZero - Homepage";
        };
      }, []);

    const handleSubmit = async () => {
        try {
            const SERVICE_ID = 'service_10ooxzv';
            const TEMPLATE_ID = 'template_xgpvxdj';
            const USER_ID = 'gU_RtDsXhi0IJk2xL';
            
            const templateParams = {
                email: email,
                message: message
            };
    
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    
            if (response.text === "OK") {
                alert('Thanks for message me.');
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
            marginTop: '1rem',
            padding: '20px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            width: isMobile ?  'auto' : undefined
        }}>
                <Typography style={{
                fontSize: "20px",
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center",
            }}>
                              <img style={{ width: isMobile ? "25px" : "40px",  
                 objectFit: 'contain' }} src={corner} alt='icon'></img>
                - Contact Corner - 
              <img style={{ width: isMobile ? "25px" : "40px",  
                 objectFit: 'contain' }} src={cornerright} alt='icon'></img>
            </Typography>

            <div style={{ border: '1px solid #5CB574', marginTop: "1rem" }}></div>

            
            <Box style={{
                padding: "30px",
                backgroundColor: '#0e0e0e',
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: '0px 0px 5px 0px #5cb574',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography style={{ color: '#5cb574', marginBottom: '1rem', fontSize: "16px" }}>Ask me anything, or reach me for serious requests.</Typography>

                <TextField
                    fullWidth
                    style={{ marginBottom: '1rem', }}
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    style={{
                        width:"100%"
                    }}
                    type='text'
                    multiline
                    rows={4}
                    placeholder="Type your message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <Button style={{boxShadow: '0px 0px 5px 0px #5cb574', marginTop: '1rem', backgroundColor: '#183D3D', color: "#5cb574", fontWeight: "bolder"}} variant="contained" onClick={handleSubmit}>
                    Send message
                </Button>
            </Box>
        </Container>
    );
}

export default Contacts;
