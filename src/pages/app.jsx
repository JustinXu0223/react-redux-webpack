/**
 * @component app.jsx
 * @description 主程序入口
 * @time 2018/3/10
 * @author JOKER XU
 */
import { Button } from 'antd';
import { Link } from 'react-router';
import React, { Component } from 'react';
import Icon from '../assets/images/logo.svg';
// import loginBg from '../assets/images/login-bg.jpg';
import './app.less';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app-container">
        <header className="header">
          <img src={Icon} className="logo" alt="logo" />
        </header>
        <ul style={{ marginTop: '20px' }} className="nav">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/demo-01">simpleDemo</Link></li>
          <li><Link to="/demo-02">TodoDemo</Link></li>
          <li><Link to="/404">Error</Link></li>
        </ul>
        <section className="section-container">
          <p>内容<Button type="primary">Button</Button></p>
          <div>{children}</div>
          {/*<img src={loginBg} />*/}
        </section>
      </div>
    );
  }
}

export default App;
