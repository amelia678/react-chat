import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: 'amelia@me.com',
      text: '',
      messages: []
    }

    this.ws = new WebSocket('ws://localhost:5000')
  }

  componentDidMount() {
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)

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
      
      
      
      </div>
    );
  }
}

export default App;
