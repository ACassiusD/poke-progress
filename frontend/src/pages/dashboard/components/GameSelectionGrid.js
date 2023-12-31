import React from 'react';
import Grid from '@mui/material/Grid';
import GameCard from './GameCard';

const GameSelectionGrid = ({ games }) => {
  console.log(games);

  return (
    <Grid container spacing={3}>
      {games.map((game) => (
        <Grid item key={game._id}>
          <GameCard name={game.name} cover={game.coverImage} progress={0} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameSelectionGrid;