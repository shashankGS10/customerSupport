const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [
    {
      role: String, // 'user' or 'assistant'
      content: String,
    },
  ],
});

module.exports = mongoose.model('Chat', chatSchema);
