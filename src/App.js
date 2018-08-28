import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowPic from './components/showpic';

let name = "Nattanon Yaaaa nice";
const element = <h1>Hello, {name}</h1>;

function formatName(user){
  return user.firstName+' '+user.lastName;
}

const user = {
  firstName : 'Nattanon',
  lastName : 'Rattanajamnong'
};

const element_format = (<h1>Hello, {formatName(user)}!</h1>);

class App extends Component {
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
        {element}
        {element_format}
        <ShowPic />

      </div>
      
     
    );
  }
}

export default App;
