import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const GameCard = ({ name, cover, progress }) => (
  <Card style={{ maxWidth: '345px' }}>
    <CardMedia
      component="img"
      height="140"
      image={`/free${cover}`}
      // image="/free/images/games/pokemon-blue.png"
      alt={name}
    />
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {name}
        {console.log(cover)}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Progress: {progress}%
      </Typography>
      {/* Add other fields or styles as needed */}
    </CardContent>
  </Card>
);

export default GameCard;
