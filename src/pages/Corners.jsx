import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';

import PostPreview from '../components/PostPreview';
import { Typography, Select, Input, Button, Box } from '@mui/material';
import icon from "../styles/img/icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faEnvelope, faHandPointLeft, faHandPointRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
function Corner() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);  // Pagina corrente
    const [order, setOrder] = useState('desc');  // Ordine dei post
    const [search, setSearch] = useState('');  // Query di ricerca
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    useEffect(() => {
        loadPosts();
    }, [page, order, search]);

    const loadPosts = async () => {
        try {
            const response = await axios.get(`/api/posts?skip=${(page - 1) * 3}&order=${order}&search=${search}`);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
      async function fetchPostCount() {
        try {
          const response = await axios.get('/api/posts/count');
          setPostCount(response.data.totalPosts);
        } catch (error) {
          console.error('Error fetching post count:', error);
        }
      }
    
      fetchPostCount();
    }, []);

    return (
        <div style={{ width: isMobile ? '340px' : undefined }}>
            <Typography style={{
                fontSize: isMobile ? "18px" : '30px',
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center"
            }}>
                Around the corner -
                <img style={{ width: isMobile ? "22px" : "40px", objectFit: 'contain' }} src={icon} alt='icon'></img>

            </Typography>

            {/* Filtri e ricerca */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "1rem", borderRadius: "0.5rem" }}>
            <h6>
  Total Corners: {postCount}
</h6>
                <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
                <FontAwesomeIcon style={{marginRight : '20px'}} icon={faHandPointRight}></FontAwesomeIcon>
                <Input placeholder="Find the corner.." value={search} onChange={(e) => setSearch(e.target.value)} />
                <FontAwesomeIcon style={{marginLeft : '20px'}} icon={faHandPointLeft}></FontAwesomeIcon>

               </div>
                <Button style={{
                    backgroundColor: '#183D3D',
                    padding: "10px",
                    color: "#5CB574",
                    fontWeight: 'bolder'
                }} onClick={() => setPage(1)}>Search
                <FontAwesomeIcon style={{marginLeft : '10px'}} icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Button>

            </div>

            <div style={{border: '1px solid #5CB574', marginTop: "2rem"}}></div>
            
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                marginTop: "1rem",
                justifyContent: "center",
                gap: '2rem',
            }}>
            {posts.map(post => (
                <PostPreview key={post._id} post={post} />
            ))}
                        {/* Navigazione paginata */}
                        <div style={{ borderRadius: '0.6rem', justifyContent: "space-between", display: "flex", marginTop: '1rem', alignItems: "center", backgroundColor: "#183D3D",  marginBottom:'1srem',padding: "10px"}}>
                <Button style={{color: "red"}} disabled={page === 1} onClick={() => setPage(prevPage => prevPage - 1)}>Prev.</Button>
                <FontAwesomeIcon style={{marginRight: "10px"}} icon={faArrowLeft}></FontAwesomeIcon>
                <span>[page {page}] 
                <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faArrowRight}></FontAwesomeIcon>
                </span>
                <Button onClick={() => setPage(prevPage => prevPage + 1)}>Next</Button>
            </div>
            </Box>


        </div>
    );
}

export default Corner;
