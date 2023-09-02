import React from 'react';
import Grid from '@mui/material/Grid';
import GameCard from './GameCard';

const GameSelectionGrid = ({ games }) => (
  <Grid container spacing={3}>
    {games.map((game) => (
      <Grid item key={game.id}>
        <GameCard name={game.name} cover={game.coverImage} progress={0} />
      </Grid>
    ))}
  </Grid>
);

export default GameSelectionGrid;
