import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png"; 

export default function GitRepos() {
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

  return (
    <Container style={{
        display: "flex",
        flexDirection: "column",
        padding: '10px',
        gap: "1rem",
        marginTop: "1rem"
    }}>
            <Typography style={{
            fontSize: "20px",
            color: "white",
            fontWeight: 'bolder',
            textAlign: "center",
        }}>
          <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>
             - Repos Corner - 
             <img style={{ width: isMobile ? "25px" : "40px", objectFit: 'contain' }} src={cornerright} alt='icon'></img>
        </Typography>
        <Typography style={{ textAlign: 'center', color: 'white', fontSize: "14px" }}>Repos and projects built or worked on.  
        <FontAwesomeIcon style={{marginLeft: "15px"}} icon={faLaptopCode}></FontAwesomeIcon>
        </Typography>
        <div style={{
            border: "1px solid #5CB574"
        }}></div>

            <Container style={{
                display: 'flex',
                marginTop: '1rem',
                flexWrap: isMobile ? 'none' : 'wrap',
                flexDirection: isMobile ? 'column' : undefined,
                alignItems: 'center',
                gap: '2rem',
                width: isMobile ? '200px' : undefined,
                padding: '10px',
                justifyContent: 'center',            }}>
                    <a rel='noreferrer noopener' target='blank' href='https://github.com/AndreaZero/Corner-Zero'><img  src='https://github-readme-stats.vercel.app/api/pin/?username=andreazero&repo=corner-zero&theme=dark&card_width=200' alt='c'></img></a>
                    <a rel='noreferrer noopener' target='blank' href='https://github.com/AndreaZero/ZeroGPT'><img src='https://github-readme-stats.vercel.app/api/pin/?username=andreazero&repo=zerogpt&theme=dark&card_width=200' alt='c'></img></a>
                    <a rel='noreferrer noopener' target='blank' href='https://github.com/AndreaZero/The-Best-KNIVES---Mint'><img src='https://github-readme-stats.vercel.app/api/pin/?username=andreazero&repo=the-best-knives---mint&theme=dark&card_width=200' alt='c'></img></a>
                    <a rel='noreferrer noopener' target='blank' href='https://github.com/AndreaZero/LosPollosSocial'><img src='https://github-readme-stats.vercel.app/api/pin/?username=andreazero&repo=lospollossocial&theme=dark&card_width=200' alt='c'></img></a>
                    <a rel='noreferrer noopener' target='blank' href='https://github.com/AndreaZero/Last-Contract-Deployed'><img src='https://github-readme-stats.vercel.app/api/pin/?username=andreazero&repo=last-contract-deployed&theme=dark&card_width=200' alt='c'></img></a>
                    <a rel='noreferrer noopener' target='blank' href='https://github.com/AndreaZero/Progetto92'><img src='https://github-readme-stats.vercel.app/api/pin/?username=andreazero&repo=progetto92&theme=dark&card_width=200' alt='c'></img></a>
                    <img style={{display: isMobile ? 'none' : undefined}} src="https://myreadme.vercel.app/api/embed/andreazero?panels=userstatistics,toprepositories,toplanguages,commitgraph" alt="reimaginedreadme" />


                   </Container>
                    </Container>

  )
}
