const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  chat_room_id: {
    type: mongoose.SchemaTypes.ObjectId
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
