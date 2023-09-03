
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import { Grid, Typography, Stack } from '@mui/material';
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //Define Login logic to be used in AuthLogin.js component
  const handleLogin = async (username, password) => {
    try {
      // Make a call to authenticate the user and get a JWT
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      // If the response is ok, save the JWT to local storage and fetch the user profile
      if (response.ok) {
        localStorage.setItem('jwt', data.token);

        // Make a second call to http://localhost:5000/api/user/profile to get the user data
        const userProfileResponse = await fetch('http://localhost:5000/api/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`
          }
        });

        const userProfileData = await userProfileResponse.json();

        //If the response is ok, set user data to local storage and navigate to dashboard
        if (userProfileResponse.ok) {
          localStorage.setItem('user', JSON.stringify(userProfileData));
          navigate('/');
        } else {
          setError(userProfileData.message || 'Failed to fetch user profile.');
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to login.');
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
