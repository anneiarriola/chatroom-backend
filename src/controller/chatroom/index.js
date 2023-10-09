const ChatRoom = require("../../models/chatroom");

exports.createChatRoom = async (req, res) => {
  try {
    const body = req.body;
    if (body.name) {
      const name = body.name;
      const chatroom = new ChatRoom()
      chatroom.name = name
      await chatroom.save()
      res.status(201).json({ message: "Chat room created" });
    } else {
      throw Error('Chat room not created, name is required')
    }
    
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getChatRoom = async (req, res) => {
  try {
    const chatroom = await ChatRoom.find();
    res.status(200).json(chatroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}