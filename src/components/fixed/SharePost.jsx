import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,  // Ho corretto "XTwitterIcon" in "TwitterIcon"
  WhatsappIcon,
  RedditIcon,
  FacebookMessengerIcon,
  TelegramIcon
} from 'react-share';

const SharePost = () => {
  const url = window.location.href; 

  return (
    <div style={{display:'flex', color: "#5CB574", lineHeight: "0", alignItems: "center", justifyContent: 'center', gap: '1rem'}}>
      <h6>Share Corner
    <FontAwesomeIcon style={{color: '#5CB574', marginLeft: "10px"}} icon={faShare}></FontAwesomeIcon>

      </h6>
    <div style={{
      display: "flex",
      gap: '0.4rem',
      alignItems: "center",
      justifyContent: "center"
    }}>

<TwitterShareButton url={url} title="Guarda questo post!">
        <TwitterIcon style={{
          borderRadius: "0.3rem"
        }}  size={24} round={false} />
      </TwitterShareButton>

      
      <RedditShareButton url={url} title="Guarda questo post!">
        <RedditIcon style={{
          borderRadius: "0.3rem"
        }} size={24} round={false} />
      </RedditShareButton>

      <TelegramShareButton url={url} title="Guarda questo post!">
        <TelegramIcon style={{
          borderRadius: "0.3rem"
        }} size={24} round={false} />
      </TelegramShareButton>
      <FacebookShareButton url={url} quote="Guarda questo post!">
        <FacebookIcon style={{
          borderRadius: "0.3rem"
        }} size={24} round={false} />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={url} title="Guarda questo post!">
        <FacebookMessengerIcon style={{
          borderRadius: "0.3rem"
        }} size={24} round={false} />
      </FacebookMessengerShareButton>


      <WhatsappShareButton url={url} title="Guarda questo post!">
        <WhatsappIcon style={{
          borderRadius: "0.3rem"
        }}  size={24} round={false} />
      </WhatsappShareButton>

    </div>
    </div>
  );
}

export default SharePost;
