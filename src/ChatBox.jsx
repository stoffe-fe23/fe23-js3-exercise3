/*
    Exercise 3 - ChatBox component (class) - box representing a chat participant.
*/
import React from "react";


class ChatBox extends React.Component {

    state = {};

    // Constructor, store props values in state
    constructor(props) {
        super(props);
        this.state.name = props.name ?? "No name";
        this.onMessage = props.onMessage;
    }

    // Submit handler for the form, call the callback function with the username and entered text.
    onFormSubmit = (event) => {
        event.preventDefault();
        this.onMessage(this.state.name, this.state.message);
        this.setState({ message: "" });
    }

    // Component JSX
    render() {
        return (
            <div className="chat-box">
                <h2>{this.state.name}</h2>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label htmlFor="message-text">Meddelande</label>
                        <textarea onChange={(evt) => this.setState({ message: evt.target.value })} id="message-text" value={this.state.message}></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
        );
    }
}

export default ChatBox;