const socketIo = require('socket.io');
const cors = require('cors');
let socketChatRoom;
let io;

module.exports = {
  init: httpServer => {
    io = socketIo(httpServer, {
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
          transports: ['websocket', 'polling'],
          credentials: true,
        },
        allowEIO3: true
      });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  },

  connection: () => {
    io.on('connection', (sockect) => {
     sockect.on('message',(msg) =>{
      console.log('msd', msg)
     })
     socketChatRoom = sockect
     console.log('connection')
   })
  },

  onMessage: (id,msg) => {
    socketChatRoom.emit(id, msg)
  }
}
