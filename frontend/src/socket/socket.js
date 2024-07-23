// src/socket/socket.js
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5000"; // Replace with your server URL

const socket = io(SOCKET_SERVER_URL);

// Function to register a user
export const registerUser = (username) => {
    socket.emit('register', username);
};

// Function to send a private message
export const sendPrivateMessage = (recipient, message) => {
    socket.emit('private_message', { recipient, message });
};

// Function to handle receiving a private message
export const onPrivateMessage = (callback) => {
    socket.on('private_message', (data) => {
        callback(data);
    });
};

// Function to disconnect socket
export const disconnectSocket = () => {
    if (socket) socket.disconnect();
};

// Export the socket instance to use it directly if needed
export default socket;
