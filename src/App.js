import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ariege Velo</h2>
        </div>
        <p className="App-intro">Hi, my name is John.</p>
        <p>I like to ride my bike.</p>
        <p>I mean really,</p>
        <p>really,</p>
        <p>really,</p>
        <p>really</p>
        <p>like to ride my bike.</p>
      </div>
    );
  }
}

export default App;
