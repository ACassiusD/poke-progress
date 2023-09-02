/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Added Link
import { Grid, Typography, Stack } from '@mui/material';
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import { UserContext } from 'context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [error, setError] = useState(null);

  //Define Login logic to be used in AuthLogin.js component
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT to local storage
        localStorage.setItem('jwt', data.token);

        //TODO: Make a seconf fetch to get the user data
        //TODO: Set the user data to state
        setUserData(data.user);

        // Redirect to dashboard
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin onLogin={handleLogin} error={error} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
