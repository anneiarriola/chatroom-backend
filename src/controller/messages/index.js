const Message = require('../../models/message');

exports.createMessage = async(req, res) => {
  const { user_sender_id, chat_room_id ,content,user_name } = req.body;
  try {
    const newMessage = new Message({ user_sender_id,chat_room_id, content, user_name });
    const message = await newMessage.save();
    require('../../socket').onMessage(chat_room_id,message)
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }

}

exports.getAllMessages = async(req,res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}


