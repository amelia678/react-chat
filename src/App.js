import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: 'amelia@me.com',
      text: '',
      messages: []
    }

    this.ws = new WebSocket('ws://localhost:3000');
  }

  componentDidMount() {
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);

      this.setState({
        messages: [
          ...this.state.messages,
          message
        ]
      })
    })
  }

  render() {
    return (
      <div>
      <ul>
        {this.state.messages.map(msg => {
          return <li>{msg.email} said : {msg.content}</li>
        })}
      </ul>
      <form onSubmit={this._sendMessage}>

        <input
        value={this.state.text}
        onChange={this._setText}
        />
        <input type="submit" />

      </form>
      
      </div>
    );
  }

  _sendMessage = (event) => {
    event.preventDefault();
    this.setState({
      text: ''
    });

    const outGoingMessage = {
      content: this.state.text,
      email: this.state.email
    }

    console.log(outGoingMessage)

    // sending message over web sockets

    this.ws.send(JSON.stringify(outGoingMessage))
  }

  _setText = (event) => {
    const text = event.target.value;
    this.setState({
        text
    })
  }
}

export default App;
