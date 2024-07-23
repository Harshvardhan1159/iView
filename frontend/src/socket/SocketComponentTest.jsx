import React, { useEffect, useState } from 'react';
import { registerUser, sendPrivateMessage, onPrivateMessage, disconnectSocket } from '../socket/socket';

const ChatComponent = ({ username }) => {
    const [message, setMessage] = useState('');
    const [recipient, setRecipient] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Register the user when the component mounts
        registerUser(username);

        // Listen for incoming private messages
        onPrivateMessage((data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Clean up the socket connection when the component unmounts
        return () => {
            disconnectSocket();
        };
    }, [username]);

    const handleSendMessage = () => {
        sendPrivateMessage(recipient, message);
        setMessage('');
    };

    return (
        <div>
            <h2>Chat Component</h2>
            <div>
                <input
                    type="text"
                    placeholder="Recipient"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
            <div>
                <h3>Messages</h3>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}: </strong>{msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatComponent;
