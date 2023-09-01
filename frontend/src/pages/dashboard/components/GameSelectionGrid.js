import React from 'react';
import Grid from '@mui/material/Grid';
import GameTile from './GameTitle';

const GameSelectionGrid = ({ games }) => (
  <Grid container spacing={3}>
    {console.log(games)}
    {games.map((game) => (
      <Grid item key={game.id}>
        <GameTile gameName={game.name} gameCover={game.cover} progress={game.progress} />
      </Grid>
    ))}
  </Grid>
);

export default GameSelectionGrid;
