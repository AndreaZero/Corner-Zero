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
    <div style={{

    }}>
      <FacebookShareButton url={url} quote="Guarda questo post!">
        <FacebookIcon size={32} round={false} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title="Guarda questo post!">
        <TwitterIcon size={32} round={false} />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title="Guarda questo post!">
        <WhatsappIcon size={32} round={false} />
      </WhatsappShareButton>
    </div>
  );
}

export default SharePost;
