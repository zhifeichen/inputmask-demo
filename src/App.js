import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './IpInput';
import MyForm from './MyForm';

class App extends Component {
  onChange = (value) => console.log(value);
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input value={'255.255.255.0'} onChange={this.onChange}/>
        <MyForm />
      </div>
    );
  }
}

export default App;
