import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, Box, TextField, Container } from '@mui/material';
import axios from 'axios';
import '../../styles/components/EditorStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function CreatePost() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const handleSubmit = async () => {
        const rawContent = convertToRaw(editorState.getCurrentContent());
        const content = JSON.stringify(rawContent);

        // Assuming that your backend expects the title and content as a part of the request body
        const payload = {
            title,
            content,
            tags
        };

        try {
            const response = await axios.post('/api/posts', payload);  // Assumi l'endpoint corretto per creare un post
            if (response.status === 201) {
                console.log('Post created successfully:', response.data);
            }
        } catch (error) {
            console.error('There was an error creating the post:', error);
        }
    };

    return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "20px",
            gap: "2rem",
            width: "auto",
        }}><span style={{color: "white"}}>- Welcome Admin. Create a new Corner!
        <FontAwesomeIcon  style={{color: "white", marginLeft: "15px",}} icon={faPenToSquare} />
        </span>
        <Box style={{
            boxShadow: '0px 0px 4px 0px white',
            padding: "30px",
            backgroundColor: '#183D3D',
            borderRadius: "1rem",
            justifyContent: 'center',
        }}>
            <TextField
            style={{
                width: "100%",

            }}
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={handleTitleChange}
            />
                        <TextField
            style={{
                width: "100%",
                marginTop: "1rem",
                marginBottom: "1rem"
            }}
                type="text"
                placeholder="Enter tags"
                value={tags}
                onChange={handleTagsChange}
            />

<Editor
    wrapperClassName="myEditorWrapper"
    editorClassName="myEditor"
    toolbarClassName="myEditorToolbar"
    editorState={editorState}
    placeholder='Type something here..'
    onEditorStateChange={setEditorState}
/>
            <center>
            <Button style={{
                marginTop: '1rem'
            }} variant="contained" color="primary" onClick={handleSubmit}>
                Publish
            </Button>
            </center>
        </Box>
        </Container>
    );
}

export default CreatePost;