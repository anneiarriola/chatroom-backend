require('dotenv').config()
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const app = require('./src/app')
const SocketChatRoom = require('./src/socket')
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, 
  socketTimeoutMS: 30000, 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});


const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

require('./src/socket').init(server)
require('./src/socket').connection()






