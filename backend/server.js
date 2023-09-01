//TODO: Handling token expiration and refresh token mechanisms.
//TODO: Implementing a logout mechanism.
//TODO: Implementing a password reset mechanism.
//TODO: Implementing a password change mechanism.

//Organize these imports
const express = require('express');
const cors = require('cors');
const expressServer = express();
const PORT = 5000;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const gamesRoutes = require('./routes/game');
const gameProgressRoutes = require('./routes/gameProgress');
const errorHandler = require('./middleware/errorHandler');
const authenticateJWT = require('./middleware/auth');
const mongoose = require('mongoose');

// Middleware
expressServer.use(express.json()); // Parse incoming JSON payloads
expressServer.use(errorHandler);  // Handle errors centrally
expressServer.use(cors()); // Allow CORS requests from all origins

expressServer.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(err.status).send({ error: 'Unauthorized', message: err.message });
    return;
  }

  // Handle other types of errors or pass them along
  next(err);
});

// Routes
expressServer.use('/api/auth', authRoutes);  // Authentication routes
expressServer.use('/api/user', authenticateJWT, userRoutes);  // User routes
expressServer.use('/api/game', gamesRoutes); // Games Routes
expressServer.use('/api/gameProgress', gameProgressRoutes); //Game Progress Routes

// Protected route with JWT authentication middleware
expressServer.get('/protected-route', authenticateJWT, (req, res) => {
  console.log(req);
  res.json({ message: "You've accessed a protected route!" });
});

// Start Connection to MongoDB to pokeTracker database
mongoose.connect('mongodb://127.0.0.1:27017/pokeTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Start the server
expressServer.listen(PORT, () => {
    console.log(`Servers started on http://localhost:${PORT}`);
});

