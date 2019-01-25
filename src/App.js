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

  render() {
    return (
      <div>
      
      
      
      </div>
    );
  }
}

export default App;
