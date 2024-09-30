/*
    Exercise 3 - App component
*/
import { useState } from 'react';
import './App.css';
import ChatBox from './ChatBox';
import MessageList from './MessageList';

function App() {
    // State keeping array of posted messages
    const [messages, setMessages] = useState([]);

    // Callback function for when a ChatBox posts a message
    function onNewMessage(name, text) {
        setMessages((currMessages) => {
            return [...currMessages, { name, text }];
        });
    }

    // Component JSX, two chatboxes and a message log. 
    return (
        <>
            <h1>Chat</h1>
            <div className="chat-area">
                <div className="chat-boxes">
                    <ChatBox onMessage={onNewMessage} name="John Doe" />
                    <ChatBox onMessage={onNewMessage} name="Jane Doe" />
                </div>
                <div className="message-log">
                    <MessageList messages={messages} />
                </div>

            </div>
        </>
    );
}

export default App;
