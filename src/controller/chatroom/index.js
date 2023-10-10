const ChatRoom = require("../../models/chatroom");
const SocketChatRoom = require('../../socket')
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

exports.connectChatRoom = async (req,res) => {
 const io = require('../../socket').getIO()
  io.of('/chatroom/:id', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
      const message = new Message(msg);
      message.save((err) => {
        if (err) return console.error(err);
        io.emit('chat message', msg);
      });
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}
exports.sendMessageToChatRoom = async (req,res) => {
 const io = require('../../socket').getIO()
  io.of('/chatroom/:id', (socket) => {
    console.log('a user connected');
      message.save((err) => {
        if (err) return console.error(err);
        io.emit('chat message', msg);
      });
  });
}