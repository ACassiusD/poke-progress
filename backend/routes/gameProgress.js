const express = require('express');
const router = express.Router();
const GameProgress = require('../models/GameProgress'); 

// Route to get game progress for a specific user and game
router.get('/:userId/:gameId', async (req, res) => {
    try {
        console.log(req.params);
        const userId = req.params.userId;
        const gameId = req.params.gameId;

        console.log("userid = " + userId);
        const gameProgress = await GameProgress.findOne({ userId: userId, gameId: gameId });
        
        if (!gameProgress) {
            return res.status(404).json({ message: 'No game progress found for the specified user and game.' });
        }

        res.json(gameProgress);

    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

module.exports = router;
