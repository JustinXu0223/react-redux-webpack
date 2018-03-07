import React, { Component } from 'react';
import Icon from './logo.svg';
import loginBg from './login-bg.jpg';
import { Button } from 'antd';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Icon} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button type="primary">Button</Button>
        </header>
        <p className="App-intro">
          <img src={loginBg}/>
        </p>
      </div>
    );
  }
}

export default App;
