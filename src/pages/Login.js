import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';
import Logo from "../assets/FUNDR.gif";

function Login({ setAuthUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', username, password);
    // Simulate authentication by setting the auth user
    //setAuthUser(username);

    navigate('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img src={Logo} alt="Fundr Logo" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography component="p" sx={{ textAlign: 'center', mt: 1 }}>
          Fund your retirement and have fun on the way!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="pension-target"
            label="Monthly Pension Target (£)"
            name="pension-target"
            type="number"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
