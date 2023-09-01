import React from 'react';
import { Card, Typography } from '@mui/material';

const GameTile = ({ gameName, gameCover, progress }) => (
  <Card>
    <img src={gameCover} alt={gameName} />
    <Typography variant="h6">{gameName}</Typography>
    {/* Include a progress bar or similar to represent progress */}
    <div>Progress: {progress}%</div>
  </Card>
);

export default GameTile;
