const socketIo = require('socket.io');
const cors = require('cors'); // Import the cors package

let socketChatRoom;
let io;

module.exports = {
  init: httpServer => {
    io = socketIo(httpServer, {
        cors: {
          origin: '*', // Replace with your front-end domain
          methods: ['GET', 'POST'] // Allow the necessary HTTP methods
        }
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
    console.log('as',msg)
    socketChatRoom.emit(id, msg)
  }
}