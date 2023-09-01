import React from 'react';
import { Grid } from '@mui/material';
import UserScore from './components/UserScore';
import GameSelectionGrid from './components/GameSelectionGrid';

const DashboardDefault = () => {
  // Sample data; replace with actual data from your backend or context
  const score = 500;
  const games = [
    { id: 1, name: 'Game 1', cover: 'path_to_cover1.jpg', progress: 50 },
    { id: 2, name: 'Game 2', cover: 'path_to_cover2.jpg', progress: 70 }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <UserScore score={score} />
      </Grid>
      <Grid item xs={12}>
        <GameSelectionGrid games={games} />
      </Grid>
      {/* Other dashboard components can go here */}
    </Grid>
  );
};

export default DashboardDefault;
