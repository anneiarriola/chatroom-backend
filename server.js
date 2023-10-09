require('dotenv').config()
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const app = require('./src/app')
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Set a longer timeout for connection attempts (in milliseconds)
  socketTimeoutMS: 30000, 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:8080", // Replace with your Vue.js application's origin
    methods: ["GET", "POST"] // Allowed HTTP methods
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle events from the client
  socket.on('chat message', (message) => {
    console.log('mes', message)
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});



server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

