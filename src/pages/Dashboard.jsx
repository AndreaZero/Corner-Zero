import React from 'react';
import CreatePost from '../components/admin/CreatePost';
import { Box} from '@mui/material'; 
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    const { isAuthenticated, logout } = useAuth();

    React.useEffect(() => {
        document.title = "CornerZero - Admin DASH";
        return () => {
          // Reimposta il titolo quando il componente viene smontato
          document.title = "CornerZero - Homepage";
        };
      }, []);

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
            <Box flex={3} pr={2}>
                <CreatePost />
            </Box>
        </Box>
    );
}

export default Dashboard;
