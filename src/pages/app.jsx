import React, { Component } from 'react';
import Icon from '../logo.svg';
import loginBg from '../login-bg.jpg';
import { Button } from 'antd';
import { Link } from 'react-router';
import './app.less';

class App extends Component {
  render() {
    const { children }= this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={Icon} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button type="primary">Button</Button>
        </header>
        <ul style={{marginTop: '20px'}}>
          <li><Link to="/demo-01">simpleDemo</Link></li>
          <li><Link to="/404">Error</Link></li>
        </ul>
        <section className="section-container">
          <p>内容</p>
          <div>{children}</div>
        </section>
        {/*<p className="App-intro">
          <img src={loginBg}/>
        </p>*/}
      </div>
    );
  }
}

export default App;
