import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { convertFromRaw, EditorState} from 'draft-js';
import '../styles/components/EditorStyles.css';
import corner from "../styles/img/corner.png";
import { useMediaQuery } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PostPreview({ post }) {
  const contentFromRaw = convertFromRaw(JSON.parse(post.content));
  const editorState = EditorState.createWithContent(contentFromRaw);
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  const plainText = editorState.getCurrentContent().getPlainText();
  const truncatedText = plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;

  return (
    <Card style={{marginTop: "1rem", width: isMobile ? '100%' : '650px',
    background: 'rgb(0,0,0)',
background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)'
    
    }}>
      <CardContent>
      <Typography style={{
          fontSize: isMobile ? "12px" : "20px",
          color: "#5CB574",
          fontWeight: 'bolder',
          display: 'flex',
          marginBottom: "2rem"

        }}>
          <img style={{ width: "27.33px", objectFit: 'contain' }} src={corner} alt='icon'></img>
          - {post.title}
        </Typography>

        <Typography 
            component="div"
            style={{
              position: 'relative',
              overflow: 'hidden',
              maxHeight: isMobile ? '70px' : '100px',
            }}>
          {truncatedText}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '20px',
          }}></div>
        </Typography>
      </CardContent>
      <CardActions>
        <Card style={{
          background: "transparent",
          borderTop: '1.5px solid gray',
          display: "flex",
          boxShadow: 'none',
          justifyContent: "space-between",
          width: "100%",
          padding: "5px",
          alignItems: "center",
          borderRadius: 0
        }}>
          <div style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: '1rem', marginTop: "8px"}}>
           <span style={{
            color: 'grey'
          }}>
                      #{post.tags}
          </span>
          <Typography style={{
            color: "red",
            fontSize: "14px"
          }}>
             <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> {post.likes}
            
          </Typography>
          </div>
          <Button style={{
            backgroundColor: '#183D3D',
            height: '30px',
            marginTop: "8px"
          }} size="small" color="primary">
<Link to={`/corners/${post._id}`} style={{boxShadow: '0px 0px 4px 0px #183d3d', textDecoration: 'none', color: "#5CB574"}}>Open</Link>
              </Button>
        </Card>
      </CardActions>

    </Card>
  );
}

export default PostPreview;
