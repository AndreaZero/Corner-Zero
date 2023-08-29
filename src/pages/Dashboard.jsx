import React from 'react';
import CreatePost from '../components/admin/CreatePost';
import { Box, Button } from '@mui/material'; // Importa Button da @mui/material
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importa faSignOutAlt per il pulsante di logout

function Dashboard() {
    const { isAuthenticated, logout } = useAuth();  // Ottieni sia isAuthenticated che logout dal contesto

    if (!isAuthenticated) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}>
            <Box style={{
                backgroundColor: 'white',
                display: "flex",
                alingnItems: 'center',
                justifyContent: "center",
                gap: "1rem",
                padding: '20px',
                borderRadius: "1rem",
                width: '250px',
                color: 'black',
                marginTop: '3rem',
                textAlign: "center"
            }}>
                <FontAwesomeIcon icon={faWarning}></FontAwesomeIcon>
                <p>
                <h4>Access denied!</h4>
                <h5>You're not an Admin.</h5>
                </p>
                <FontAwesomeIcon icon={faWarning}></FontAwesomeIcon>
            </Box>
            </div>
        );
    }

    return (
        <Box marginTop='3rem' display="flex" flexDirection="row" p={2} alignItems="center" justifyContent="space-between"> 
            {/* Aggiunto alignItems e justifyContent */}
            <Box flex={3} pr={2}>
                <CreatePost />
            </Box>
            {/* Aggiunto pulsante di logout a destra */}
        </Box>
    );
}

export default Dashboard;
