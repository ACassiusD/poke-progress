const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');  
const router = express.Router();

// Get user profile - Protected route with JWT authentication middleware
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        // Assuming your JWT payload contains the user's ID as 'userId'
        const userId = req.auth.userId;

        // Fetch the user's profile from the database
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // For security, don't return the password. Use select to omit fields.
        const userProfile = await User.findById(userId).select('-password');

        res.send(userProfile);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error: ' + error });
    }
});

module.exports = router;