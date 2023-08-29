import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import iconright from "../styles/img/iconright.png";
import icon from "../styles/img/icon.png";

function LastFivePosts() {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                setRecentPosts(response.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            }
        };

        fetchRecentPosts();
    }, []);

    const handleClick = (postId) => {
        console.log("Clicked on post:", postId);
        // Qui potresti navigare al post o eseguire altre azioni quando un post viene cliccato.
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
    &lt;<span style={{color: '#5CB574'}}> What's new? </span>&gt;
    <img style={{width: '16px', objectFit: 'contain',  marginLeft: "10px"}} src={icon} alt='icon'></img>
</Typography>

            <List style={{
                padding: "10px",
                maxWidth: '350px',
                borderRadius: "0.5rem",
                boxShadow: "0px 0px 5px 0px black",
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(56,56,56,0.7587827367275035) 100%)',
            }}>
                {recentPosts.map((post) => (
                    <Link style={{textDecoration: 'none', color: '#183D3D'}} to={`/posts/${post._id}`}>
                    <ListItem 
                        button 
                        style={{
                            color: "#5CB574", 
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
                        <FontAwesomeIcon style={{marginRight: "10px", color: 'white'}} icon={faGreaterThan}></FontAwesomeIcon>
                        Read
                    </ListItem>
                    </Link>
                ))}
            </List>
            <br />
</div>
    );
}

export default LastFivePosts;
