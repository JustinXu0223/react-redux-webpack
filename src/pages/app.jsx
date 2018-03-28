/**
 * @component app.jsx
 * @description 主程序入口
 * @time 2018/3/10
 * @author JOKER XU
 */
import { Button } from 'antd';
import { Link } from 'react-router';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../assets/images/logo.svg';
// import loginBg from '../assets/images/login-bg.jpg';
import styles from './app.less';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      test: false
    };
  }
  render() {
    const { children } = this.props;
    const { test } = this.state;
    const cx = classNames({
      app: test,
      test: !test,
    });
    return (
      <div className={styles[cx]}>
        <header className={styles.header}>
          <img src={Icon} className={styles.logo} alt="logo" />
        </header>
        <ul style={{ marginTop: '20px' }} className={styles.nav}>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/demo-01">simpleDemo</Link></li>
          <li><Link to="/demo-02">TodoDemo</Link></li>
          <li><Link to="/404">Error</Link></li>
        </ul>
        <section className={styles.section}>
          <p>内容
            <Button type="primary" onClick={() => this.setState({test: !test})}>Button</Button>
          </p>
          <div>{children}</div>
          {/*<img src={loginBg} />*/}
        </section>
      </div>
    );
  }
}

export default App;
