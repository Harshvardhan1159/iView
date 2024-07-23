const { Server } = require('socket.io');

const users = {}; // To store user socket IDs

module.exports = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log('a user connected:', socket.id);

        // Store the user's socket ID with their username
        socket.on('register', (username) => {
            users[username] = socket.id;
            console.log(`User registered: ${username} with socket ID: ${socket.id}`);
        });

        // Send a private message to a specific user
        socket.on('private_message', ({ recipient, message }) => {
            const recipientSocketId = users[recipient];
            if (recipientSocketId) {
                io.to(recipientSocketId).emit('private_message', {
                    sender: socket.id,
                    message: message
                });
            } else {
                console.log(`User ${recipient} not found.`);
            }
        });

        socket.on('disconnect', () => {
            console.log('user disconnected:', socket.id);
            // Remove user from the users object
            for (let username in users) {
                if (users[username] === socket.id) {
                    delete users[username];
                    break;
                }
            }
        });
    });
};
