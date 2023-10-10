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

// const server = http.createServer(app);
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const io = socketIo(server, {
  cors: {
    origin: '*', // Replace with your Vue.js application's origin
    methods: ["GET", "POST"], // Allowed HTTP methods
    credentials: true,
    optionsSuccessStatus: 204,
  }
});

io.on('connection', (socket) => {
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






