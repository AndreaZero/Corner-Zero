import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
