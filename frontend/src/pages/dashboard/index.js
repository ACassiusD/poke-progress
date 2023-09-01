import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import UserScore from './components/UserScore';
import GameSelectionGrid from './components/GameSelectionGrid';

const DashboardDefault = () => {
  const [games, setGames] = useState([]);
  const score = 500; // keep or fetch from the backend if dynamic

  //On page load, fetch the list of games
  // TODO: UPDATE ENDPOINT
  useEffect(() => {
    fetch('http://localhost:5000/api/game/findAll')  
      .then(response => response.json())
      .then(data => {
        setGames(data);  // Set the games data to state
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <UserScore score={score} />
      </Grid>
      <Grid item xs={12}>
        <GameSelectionGrid games={games} />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
