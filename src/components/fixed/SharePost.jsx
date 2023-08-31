import { faShare, faCopy } from '@fortawesome/free-solid-svg-icons'; // Importa l'icona di copia
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'; // Importa useState
import { useMediaQuery } from '@mui/material';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  FacebookMessengerIcon,
  TelegramIcon
} from 'react-share';

const SharePost = () => {
  const url = window.location.href; 
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  const [copied, setCopied] = useState(false); // Stato per il link copiato

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url); // Copia l'URL negli appunti
      setCopied(true); // Imposta lo stato come copiato
      setTimeout(() => setCopied(false), 2000); // Reimposta lo stato dopo 2 secondi
    } catch (err) {
      console.error('Failed to copy url', err);
    }
  }

  return (
    <div style={{display:'flex', color: "#5CB574", lineHeight: "0", alignItems: "center", justifyContent: 'center', gap: '1rem'}}>
      {!isMobile && (
        <h6>Share Corner
          <FontAwesomeIcon style={{color: '#5CB574', marginLeft: "10px"}} icon={faShare}></FontAwesomeIcon>
        </h6>
      )}
      
      <div style={{
        display: "flex",
        gap: '0.4rem',
        alignItems: "center",
        justifyContent: "center"
      }}>

        <button onClick={copyToClipboard} style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={faCopy} style={{ color: '#5CB574', fontSize: '24px' }} />
        </button>

        {copied && <span>Copiato!</span>} {/* Mostra un messaggio se l'URL è stato copiato */}

        <TwitterShareButton url={url} title="CornerZero.eu - Read this corner!">
          <TwitterIcon style={{ borderRadius: "0.3rem" }}  size={24} round={false} />
        </TwitterShareButton>

        <RedditShareButton url={url} title="CornerZero.eu - Read this corner!">
          <RedditIcon style={{ borderRadius: "0.3rem" }} size={24} round={false} />
        </RedditShareButton>

        <TelegramShareButton url={url} title="CornerZero.eu - Read this corner!">
          <TelegramIcon style={{ borderRadius: "0.3rem" }} size={24} round={false} />
        </TelegramShareButton>
        
        <WhatsappShareButton url={url} title="CornerZero.eu - Read this corner!">
          <WhatsappIcon style={{ borderRadius: "0.3rem" }}  size={24} round={false} />
        </WhatsappShareButton>

      </div>
    </div>
  );
}

export default SharePost;
