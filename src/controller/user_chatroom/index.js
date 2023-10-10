const UserChatRoom = require('../../models/user_chatroom')
const User = require('../../models/user')
const ChatRoom = require('../../models/chatroom')

exports.validationChatRoom = async (req, res) => {
    const { user_id, chat_room_id } = req.body;

    try {
      // Check if the user exists
      const user = await User.findById(user_id);
      if (!user._id) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Check if the chat room exists
      const chatRoom = await ChatRoom.findById(chat_room_id);
      if (!chatRoom._id) {
        return res.status(404).json({ error: 'Chat room not found' });
      }
  
     // Check if the user is already in the chat room
      const userChatRoom = await UserChatRoom.findOne({
        user_id: user_id,
        chat_room_id: chat_room_id,
      });
  
      if (userChatRoom) {
        return res.status(200).json({ message: 'User is already in the chat room' });
      } else {
        // If the user is not in the chat room, join
        const newUserChatRoom = new UserChatRoom({
          user_id: user_id,
          chat_room_id: chat_room_id,
        });
  
        await newUserChatRoom.save();
  
        return res.status(200).json({ message: 'User has joined the chat room' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
}