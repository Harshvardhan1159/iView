const socketIO = require('socket.io');

const io = new socketIO.Server({
  cors: {
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://i-view.vercel.app",
      ];
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      // Allow if origin is in the list OR is a Vercel preview deployment
      if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ['GET', 'POST'],
    credentials: true
  },
});

io.on('connection', (socket) => {
  // Get the interviewID from the client's query parameters
  const { interviewID } = socket.handshake.query;

  // Join the socket to a room based on the interviewID
  socket.join(interviewID);

  console.log(`${socket.id} connected to interview ${interviewID}`);

  // Handle drawing events
  socket.on('draw', (data) => {
    console.log('Draw event received:', data);
    // Broadcast the draw event only to other clients in the same room
    socket.to(interviewID).emit('draw', data);
  });

  socket.on('down', (data) => {
    console.log('Down event received:', data);
    // Broadcast the down event only to other clients in the same room
    socket.to(interviewID).emit('down', data);
  });

  // Handle chat messages
  socket.on('send_message', (message) => {
    console.log('Message received:', message);
    // Broadcast the message only to other clients in the same room
    socket.to(interviewID).emit('receive_message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected from interview ${interviewID}`);
  });
});

module.exports = {
  server: io,
};
