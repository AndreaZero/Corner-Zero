import { Button } from '@mui/material';
import React, { useState } from 'react';

function SliderModal({ images, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (event) => {
        event.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    
    const handlePrev = (event) => {
        event.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <img
                src={images[currentIndex]}
                alt={`Slider Image ${currentIndex}`}
                style={{ maxHeight: '70vh', maxWidth: '70vw', borderRadius: "1rem"}}
            />
            <div style={{ marginTop: '20px', display: 'flex', gap: '1rem' }}>
            <Button style={{ backgroundColor: '#183D3D',boxShadow: "0px 0px 1px 0px #5CB574", color: '#5CB574', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}  onClick={(event) => handlePrev(event)}>Prev</Button>
            <Button style={{ backgroundColor: '#183D3D', boxShadow: "0px 0px 1px 0px #5CB574", color: '#5CB574', border: 'none', borderRadius: '5px', cursor: 'pointer' }}  onClick={(event) => handleNext(event)}>Next</Button>
            </div>
        </div>
    );
}

export default SliderModal;
