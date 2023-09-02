import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const GameCard = ({ name, cover, progress }) => (
  <Card style={{ maxWidth: '345px' }}>
    <CardMedia component="img" height="140" image={`${cover}`} alt={name} />
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

//Add type checking for component properties
GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default GameCard;
