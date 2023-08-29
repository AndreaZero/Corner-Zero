import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

const SharePost = () => {
  const url = window.location.href; // Ottieni l'URL della pagina corrente

  return (
    <div>
      <FacebookShareButton url={url} quote="Guarda questo post!">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title="Guarda questo post!">
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title="Guarda questo post!">
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
}

export default SharePost;
