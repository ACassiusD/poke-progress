const mongoose = require('mongoose');

const gameProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  progressPercentage: { type: Number, default: 0 },
  // This will hold user's progress
  trackers: [
    {
      name: { type: String, required: true },
      obtainedItems: [String],  // List of items that the user has obtained for that tracker
    }
  ],
});

module.exports = mongoose.model('GameProgress', gameProgressSchema, 'game_progresses');
