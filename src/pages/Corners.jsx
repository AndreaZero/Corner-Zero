import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';
import corner from "../styles/img/corner.png";
import PostPreview from '../components/PostPreview';
import { Typography, Input, Box } from '@mui/material';
import cornerright from "../styles/img/cornerright.png";

function Corner() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('desc');
    const [search, setSearch] = useState('');
    const mobileWidth = 600;
    const isMobile = useMediaQuery(`(max-width: ${mobileWidth}px)`);

    React.useEffect(() => {
        document.title = "CornerZero - Corners";
        return () => {
          document.title = "CornerZero - Homepage";
        };
      }, []);

    useEffect(() => {
        loadPosts();
    }, [order, search]);

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
        <div style={{ width: isMobile ? '340px' : undefined, alignItems: "center", marginTop: "1rem" }}>
            <Typography style={{
                fontSize: "20px",
                color: "white",
                fontWeight: 'bolder',
                textAlign: "center",
                marginBottom: "1rem"
            }}>
                <img style={{ width: isMobile ? "22px" : "40px", objectFit: 'contain' }} src={corner} alt='icon' />
                - Around the corner -
                <img style={{ width: isMobile ? "22px" : "40px", objectFit: 'contain' }} src={cornerright} alt='icon' />
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", marginTop: "1rem", borderRadius: "0.5rem" }}>
                <h6>
                    <img style={{ width: "15px", objectFit: 'contain' }} alt='corner' src={corner} />- Corners: {postCount}
                </h6>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                    <Input style={{ borderRadius: '0.4rem', padding: "8px", height: "40px", backgroundColor: "white", color: "black" }} placeholder="Type smth.." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div style={{ border: '1px solid #5CB574', marginTop: "1rem" }}></div>

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
            </Box>
        </div>
    );
}

export default Corner;
