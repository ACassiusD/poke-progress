const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');
const authenticateJWT = require('./middleware/auth');
const mongoose = require('mongoose');

//TODO: Handling token expiration and refresh token mechanisms.
//TODO: Implementing a logout mechanism.
//TODO: Implementing a password reset mechanism.
//TODO: Implementing a password change mechanism.

app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(errorHandler); // Add the error handler middleware
app.use('/api/auth', authRoutes); // Add the auth routes to the /api endpoint
app.use(cors()); // Enable CORS

//Example endpoint
app.get('/', (req, res) => {
  res.json({ message: "Example endpoint." });
});

// Example endpoint protected by `authenticateJWT` middleware 
// Checks if the user has a valid JWT token before allowing access
app.get('/protected-route', authenticateJWT, (req, res) => {
  res.json({ message: "You've accessed a protected route!" });
});

// Start Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/pokeTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Servers started on http://localhost:${PORT}`);
});