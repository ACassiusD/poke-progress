import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import GameSelectionGrid from './components/GameSelectionGrid';

const DashboardDefault = () => {
  const [games, setGames] = useState([]);

  // Get user data from local storage
  const storedUserData = localStorage.getItem('user');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  // On page load, fetch the list of games
  useEffect(() => {
    fetch('http://localhost:5000/api/game/findAll') // TODO: UPDATE ENDPOINT
      .then((response) => response.json())
      .then((data) => {
        setGames(data); // Set the games data to state
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {/* Check if userData exists and then display the message */}
        {userData && (
          <>
            <Typography variant="h6">You are logged in!</Typography>
            <Typography variant="body1">Username: {userData.username}</Typography>
            <Typography variant="body1">User ID: {userData.uuid}</Typography>
          </>
        )}
      </Grid>
      <Grid item xs={12}>
        <GameSelectionGrid games={games} />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
