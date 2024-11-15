


const socketIO = require('socket.io');

    const io = new socketIO.Server( {
        cors: {
          origin: 'http://localhost:5173', // Replace with your frontend's URL
          methods: ['GET', 'POST']
        }
      });
      io.on('connection', (socket) => {
        console.log(`${socket.id} connected`); // Log connection
      
        socket.on('draw', (data) => {
          console.log('Draw event received:', data); // Log received draw event
          socket.broadcast.emit('draw', data); // Broadcast to other clients
        });
      
        socket.on('down', (data) => {
          console.log('Down event received:', data); // Log received down event
          socket.broadcast.emit('down', data); // Broadcast to other clients
        });
      
        socket.on('disconnect', () => {
          console.log(`${socket.id} disconnected`); // Log disconnection
        });
      });

module.exports = {
    server: io
};
