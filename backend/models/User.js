const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid'); // Import the UUID library


// Define  User schema for MongoDB with
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required'],  // Ensures that a username is provided when creating a user
    trim: true, // Removes whitespace around the username
    minlength: [3, 'Username should be longer than 3 characters'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password should be longer than 8 characters'],
  },
  uuid: {  // Add UUID field to the schema
    type: String,
    default: uuidv4, // Use the UUID library to generate a default value
    unique: true,  // Ensure the UUID is unique across all users
  }
});



// Hashes the user's password. 
// This should be called before saving a new user to the database.
userSchema.methods.hashPassword = async function() {
  this.password = await bcrypt.hash(this.password, 10);
};

/**
 * Validates a password against the user's saved password.
 * @param {string} password - The password to validate.
 * @returns {Promise<boolean>} - A promise that resolves to whether the password was valid.
 */
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre('validate', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
