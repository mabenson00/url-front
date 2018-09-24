import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlForm from './urlform.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
      <UrlForm
        />
      </div>
    );
  }
}

export default App;
