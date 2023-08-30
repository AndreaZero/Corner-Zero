import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import axios from "axios";
function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/users/register', {
        username,
        password,
      });
  
      const token = response.data.token;
      localStorage.setItem('authToken', token);
    } catch (error) {
      console.error("Errore durante la registrazione:", error.response.data.error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Registrati</Typography>
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
        <Button variant="contained" color="primary" type="submit">Registrati</Button>
      </form>
    </Container>
  );
}

export default RegisterPage;
