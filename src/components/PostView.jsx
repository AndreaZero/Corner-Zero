import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box, Container} from '@mui/material';
import { convertFromRaw, EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Footer from "../components/fixed/Footer";
import corner from "../styles/img/corner.png";
import cornerright from "../styles/img/cornerright.png";
import '../styles/components/EditorStyles.css';
import moment from 'moment';
import { useMediaQuery } from '@mui/material';

import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

function PostView() {
  const [post, setPost] = useState(null);
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const { isAuthenticated } = useAuth(); // Usiamo 'useAuth' per ottenere 'isAuthenticated'
  // Usato per reindirizzare l'utente dopo l'eliminazione

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
    fetchPost();
  }, [id]);

  const deletePost = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`/api/posts/${id}`);
        navigate('/corners'); // Reindirizza l'utente alla lista dei post dopo l'eliminazione
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (!post) return <div>Loading...</div>;

  const addLike = async () => {
    try {
        const response = await axios.put(`/api/posts/${id}/like`);
        if (response.status === 200) {
            setPost(prevState => ({
                ...prevState,
                likes: response.data.likes
            }));

            // Aggiunta della logica per l'animazione
            setLiked(true);
            setTimeout(() => setLiked(false), 400); // Durata dell'animazione
        }
    } catch (error) {
        if (error.response && error.response.data.error === 'You have already liked this post') {
            alert('You already liked this post!');
        } else {
            console.error('Error adding like:', error);
        }
    }
};

  
  

  const contentFromRaw = convertFromRaw(JSON.parse(post.content));
  const editorState = EditorState.createWithContent(contentFromRaw);
  const contentHTML = stateToHTML(editorState.getCurrentContent());

  return (
    <Container>
                        <Typography style={{
                fontSize: isMobile ? '15px' : '30px',  // Adatta la larghezza su dispositivi mobili
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center",
                marginBottom: "1rem"
            }}>
                              <img style={{ width: "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>

                 - Inside the corner - 
                 <img style={{ width: "40px", 
                 objectFit: 'contain' }} src={cornerright} alt='icon'></img>


            </Typography>
    <Card style={{      width: isMobile ? '120px' : '850px',
    
    
    borderBottom: '1px solid gray',              background: 'rgb(0,0,0)',
    background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)',}}>

      
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
          <Typography variant="h5" style={{color: '#5CB574'}} component="div">
            {post.title}
          </Typography>
          {isAuthenticated && (
          <Button color="secondary" onClick={deletePost}>Elimina</Button>
          )}

          <Button 
              style={{backgroundColor: "#183D3D", fontWeight: 'bolder', color: "#5CB574", padding: '10px'}}
                onClick={addLike}
                className={liked ? 'liked' : ''}
                > 
                <FontAwesomeIcon style={{marginRight: "5px"}} icon={faHeart}>
                </FontAwesomeIcon>
                ({post.likes})

              </Button>
        </div>
          <div style={{color: '#1976D2',display: 'flex', alignItems: "center", borderBottom: "1px solid grey", padding: "5px"}}>
          <h5>#{post.tags} -</h5> 
          <h5 style={{marginLeft: "5px"}}>
             {moment(post.createdAt).format('D MMMM YYYY')}
            </h5>
            <FontAwesomeIcon style={{marginLeft: "5px"}} icon={faClock}></FontAwesomeIcon>
            </div>
        <Typography style={{marginTop: '2rem',}} component="div" dangerouslySetInnerHTML={{ __html: contentHTML }} />
      
      </CardContent>
      <div style={{
        marginTop: "0.4rem",
        padding: "10px",
      }}>
      </div>
    </Card>
          <Footer />
          </Container>
  );
}

export default PostView;
