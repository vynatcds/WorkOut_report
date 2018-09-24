import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Content from './content';

class App extends Component {
	
  render() {
    return (
      
      <div>
		<div className="App-top-side">
	
		<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to WorkOut Report</h1>
        </header>
		</div>
		<Content />
        
      </div>
      
     
    );
  }
}
export default App;
