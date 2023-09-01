const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coverImage: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  // This will hold dynamic tracker templates
  trackers: [
    {
      name: { type: String, required: true },
      items: [String],  // Array of items for that tracker (e.g., list of TMs, berries, etc.)
    }
  ],
});

module.exports = mongoose.model('Game', gameSchema);
