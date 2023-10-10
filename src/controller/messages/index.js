const Message = require('../../models/message');

exports.createMessage = async(req, res) => {
  const { user_sender_id, chat_room_id ,content } = req.body;
  try {
    const newMessage = new Message({ user_sender_id,chat_room_id, content });
    await newMessage.save();
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


