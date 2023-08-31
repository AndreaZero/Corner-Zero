import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import PostPreview from './PostPreview';
import { useMediaQuery } from '@mui/material';

function PostHome() {
  const [posts, setPosts] = useState([]);
  const mobileWidth = 600;
  const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('/api/posts');


        if (response.data && response.data.length > 0) {
          setPosts(response.data.slice(0, 3));
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Grid style={{
      display: 'flex',
      flexDirection: "column",
      gap: '2rem',
      width: isMobile ? '100%' : undefined,  
      padding: isMobile ? '0' : undefined 
    }} item xs={4}>
      {posts.map(post => <PostPreview key={post._id} post={post} />)}
    </Grid>
);

}

export default PostHome;
