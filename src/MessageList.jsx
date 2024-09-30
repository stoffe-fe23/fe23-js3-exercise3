/*
    Exercise 3 - MessageList component (function) - log over posted messages.
*/


function MessageList({ messages }) {
    // If there are no messages to list, show notice instead.
    if (!messages || !messages.length) {
        return (<div className="no-messages">No messages posted yet!</div>);
    }

    // Display posted messages.
    return (
        <>
            <h2>Chat history</h2>
            <ul className="message-list">
                {messages.map((message, idx) => {
                    return (
                        <li key={idx}><span className="log-name">{message.name ?? "No name"}:</span> {message.text ?? "No text"}</li>
                    );
                })}
            </ul>
        </>
    );
}


export default MessageList;