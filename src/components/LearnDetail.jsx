// LearnDetail.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import learnData from '../data/learn';
import { useParams } from 'react-router-dom';

function LearnDetail() {
    const { id } = useParams();
    const learnItem = learnData.find(item => item.id === parseInt(id));

    if (!learnItem) {
        return <Typography>Error: Card not found!</Typography>;
    }

    return (
        <Container>
            <Typography>{learnItem.title}</Typography>
            <Typography>
                {learnItem.popup}
  
            </Typography>
        </Container>
    );
}

export default LearnDetail;
