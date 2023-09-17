import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import iconright from "../../../styles/img/iconright.png";
import icon from "../../../styles/img/icon.png"; 

function LastFiveLikedPosts() {
    const [topLikedPosts, setTopLikedPosts] = useState([]);

    useEffect(() => {
        const fetchTopLikedPosts = async () => {
            try {
                const response = await axios.get('/api/posts/top-liked');
                setTopLikedPosts(response.data);
            } catch (error) {
                console.error('Error fetching top liked posts:', error);
            }
        };

        fetchTopLikedPosts();
    }, []);

    const handleClick = (postId) => {
        console.log("Clicked on post:", postId);

    };

    const truncateTitle = (title, maxLength) => {
        if(title.length <= maxLength) return title;
        return title.substr(0, maxLength) + '...';
    };
    

    return (
        <div style={{
            width: "100%",
            padding: '15px',
            borderRadius: "0.4rem"
        }}>
            <Typography style={{
                padding: '10px',
                textAlign: "center",
                color: 'white',
                borderRadius: "0.4rem"
            }}>
                    <img style={{width: '16px', objectFit: 'contain', marginRight: "10px"}} src={iconright} alt='icon'></img>
                    &lt;<span style={{color: '#5CB574'}}> Hot Corners </span>&gt;
                    <img style={{width: '16px', objectFit: 'contain',  marginLeft: "10px"}} src={icon} alt='icon'></img>
            </Typography>
            <List style={{
 background: 'rgb(0,0,0)',
 background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)',
                padding: "10px",
                maxWidth: '350px',
                borderRadius: "0.5rem",
                boxShadow: "0px 0px 5px 0px black"
            }}>
                {topLikedPosts.map((post) => (
                    <Link style={{textDecoration: 'none', color: '#183D3D'}} to={`/corners/${post._id}`}>
                    <ListItem 
                        button 
                        style={{
                            color: "white", 
                            lineHeight: '0px',
                            borderBottom: '1px solid gray',

                            transition: "background-color 0.3s, transform 0.2s",
                            "&:hover": {
                                backgroundColor: "#5CB574",
                                transform: "scale(1.05)"
                            },
                            "&:active": {
                                transform: "scale(0.95)"
                            }
                        }} 
                        key={post._id}
                        onClick={() => handleClick(post._id)}
                    >
                        <ListItemText primary={truncateTitle(post.title, 16)} />
                        <FontAwesomeIcon style={{marginRight: "10px", color: '#5CB574'}} icon={faHeart}></FontAwesomeIcon>
                        <h4>{post.likes}

                        </h4>

                    </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
}

export default LastFiveLikedPosts;
