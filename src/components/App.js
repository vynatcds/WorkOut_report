import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LogIn from  '../components/login';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WorkOut Report</h1>
        </header>
        <LogIn/>

        
      </div>
      
     
    );
  }
}

export default App;
