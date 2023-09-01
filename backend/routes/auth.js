const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Post request to Register a new user
// Takes in a username and password, hashes the password, and stores it in MongoDB.
router.post('/register', async (req, res) => {
  
  const { username, password } = req.body;

  if(!password || password.length < 8) {
    return res.status(400).send({ message: 'Password should be at least 8 characters long.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists' });
    }

    //Password hashing is done in the User model with pre('validate') middleware
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User registered successfully' });
    
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error: ' + error });
  }
});

// Post request to Authenticate an existing user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    // Handle the case where a user does not exist or password is wrong
    if (!user || !(await user.validatePassword(req.body.password))) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' }); //TODO: Store this in a .env file

    // Return a message alongside the token to inform the user about the successful login.
    res.send({ token, message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error: ' + error });
  }
});

module.exports = router;
