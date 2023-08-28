import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import SidebarLeft from './fixed/SidebarLeft';
import SidebarRight from './fixed/SidebarRight';
import axios from 'axios';
import PostPreview from './PostPreview';

function PostHome() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('/api/posts');

        // Controllo se ci sono post prima di prenderne uno
        if (response.data && response.data.length > 0) {
          setPosts(response.data.slice(0, 3)); // Prende i primi 3 post
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
    }} item xs={4}>
      {posts.map(post => <PostPreview key={post._id} post={post} />)}
    </Grid>
  );
}

export default PostHome;
