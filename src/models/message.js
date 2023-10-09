const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user_sender_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  chat_room_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ChatRoom',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
