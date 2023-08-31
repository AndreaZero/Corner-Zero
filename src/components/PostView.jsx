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
import { faClock, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import SharePost from './fixed/SharePost';
import { borderBottom } from '@mui/system';

function PostView() {
  const [post, setPost] = useState(null);
  const mobileWidth = 600;
  const tabletWidth = 820;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);
  const isTablet = useMediaQuery(`(max-width: ${tabletWidth}px)`);           
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(null);

  const { isAuthenticated } = useAuth();

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
        navigate('/corners');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (!post) return <div>Loading...</div>;

  const addLike = async () => {
    if (localStorage.getItem(`liked-${id}`)) {
        setLiked('Liked!');
        return;
    }

    try {
        const response = await axios.put(`/api/posts/${id}/like`);
        if (response.status === 200) {
            setPost(prevState => ({
                ...prevState,
                likes: response.data.likes
            }));
            
            localStorage.setItem(`liked-${id}`, 'true');
            setLiked('Liked!');
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            console.error('Error adding like:', error.response.data.error);
        } else {
            console.error('Error adding like:', error);
        }
    }
};



  const contentFromRaw = convertFromRaw(JSON.parse(post.content));
  const editorState = EditorState.createWithContent(contentFromRaw);
  const contentHTML = stateToHTML(editorState.getCurrentContent());

  return (
    <Container style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Typography style={{
                fontSize: isMobile ? '15px' : '30px',
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center",
                marginTop: "1rem",
            }}>
                              <img style={{ width: "40px", objectFit: 'contain' }} src={corner} alt='icon'></img>

                 - Inside the Corner - 
                 <img style={{ width: "40px", 
                 objectFit: 'contain' }} src={cornerright} alt='icon'></img>


            </Typography>
<div style={{borderBottom: "1px solid #5cb574", marginTop: "1rem"}}></div>

    <Card style={{      width: isMobile ? '100%' : isTablet ? '800px' : '100%',
    borderBottom: '1px solid gray',              
    background: 'rgb(0,0,0)',
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)',}}>

      
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h5" style={{color: '#5CB574'}} component="div">
            {post.title}
          </Typography>
          {isAuthenticated && (
            <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
          <Button style={{color: 'red'}} onClick={deletePost}>Delete</Button>
          <FontAwesomeIcon style={{color: "red"}} icon={faTrashCan}></FontAwesomeIcon>
          </div>
          )}
        </div>
        <div style={{
          display: 'flex',
          color: "#279EFF",
        }}>
          
          <h5>#{post.tags} - </h5>
          <h5 style={{marginLeft: "5px"}}>
             {moment(post.createdAt).format('D MMMM YYYY')}
             <FontAwesomeIcon style={{marginLeft: "5px"}} icon={faClock}></FontAwesomeIcon>
            </h5>
          </div>
          <div style={{
          display: 'flex',
          color: "#279EFF",
          height: "30px",
          justifyContent: "space-between"
        }}>
        <Button 
    style={{backgroundColor: "#183D3D", fontSize: "12px", fontWeight: 'bolder', color: "#5CB574"}}
    onClick={addLike}
    className={liked === 'Liked!' ? 'liked' : ''}
> 
    <FontAwesomeIcon style={{marginRight: "5px"}} icon={faHeart}></FontAwesomeIcon>
    ({post.likes})
    <h6 style={{fontSize: '12px'}}>{liked === 'Liked!' && <span style={{ marginLeft: '10px', color: 'red' }}>{liked}</span>}</h6>
    <h6 style={{fontSize: '12px'}}>{liked === 'Liked!' && <span style={{ marginLeft: '10px', color: 'green' }}>{liked}</span>}</h6>
</Button>


              <SharePost />
              </div>
          <div style={{color: '#1976D2',display: 'flex', alignItems: "center", borderBottom: "1px solid grey", padding: "5px"}}/>
          
        <Typography style={{marginTop: '2rem',}} component="div" dangerouslySetInnerHTML={{ __html: contentHTML }} />

      </CardContent>

    </Card>
          <Footer />
          </Container>
  );
}

export default PostView;
