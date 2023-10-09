const mongoose = require('mongoose');

const userChatRoomSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  chat_room_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ChatRoom',
    required: true
  },
});

const UserChatRoom = mongoose.model('UserChatRoom', userChatRoomSchema);

module.exports = UserChatRoom;
