import React from 'react';
import { Typography } from '@mui/material';

const UserScore = ({ score }) => (
  <div>
    <Typography variant="h4">Your Score: {score}</Typography>
    {/* You can add more visual representation, like a progress circle/bar here */}
  </div>
);

export default UserScore;
