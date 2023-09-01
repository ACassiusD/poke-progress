const express = require('express');
const router = express.Router();
const Game = require('../models/Game'); // assuming you've a Game model in a models folder

// Route to fetch all games
router.get('/findAll', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

module.exports = router;
