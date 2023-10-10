const Message = require('../../models/message');
const User = require('../../models/user');

exports.createMessage = async(req, res) => {
  const { user_sender_id, chat_room_id ,content } = req.body;
  try {
    const newMessage = new Message();
    newMessage.user_sender_id = user_sender_id;
    newMessage.chat_room_id = chat_room_id;
    newMessage.content = content;
    const message = await newMessage.save();
    message.user_sender_id = await User.findById(user_sender_id)
    require('../../socket').onMessage(chat_room_id,message)
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }

}

exports.getAllMessages = async(req,res) => {
  try {
    const { chat_room_id } = req.query;
    const messages = await Message.find({ 
      chat_room_id: chat_room_id 
    }).populate('user_sender_id').sort({ timestamp: 1 }).exec();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}


