import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); 
  const { isAuthenticated, setIsAuthenticated } = useAuth(); 

  React.useEffect(() => {
    document.title = "CornerZero - Admin Login";
    return () => {

      document.title = "CornerZero - Homepage";
    };
  }, []);

  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/users/login', {
        username,
        password,
      });
  
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      
      setIsAuthenticated(true);
      
      navigate('/admin/dashboard');
    } catch (error) {
      console.error("Errore durante il login:", error.response.data.error);
    }
  };

  return (
        <Container style={{
          marginTop: "3rem",
          backgroundColor: '#183D3D',
          padding: "20px",
          color: "white",
          borderRadius: "1rem"
        }}>
        <Typography variant="h4" gutterBottom>Admin Panel - Corner Zero</Typography>
        <Typography variant="h6" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">Accedi</Button>
      </form>
    </Container>
  );
}

export default LoginPage;
