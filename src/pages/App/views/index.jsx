/**
 * @component app.jsx
 * @description 主程序入口
 * @time 2018/3/10
 * @author JOKER XU
 */
import { Button } from 'antd';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../../../assets/images/logo.svg';
import styles from './index.less';

import { view as Hello } from '../../Hello';
import Todo from '../../Todo';
import ControlPanel from '../../ControlPanel';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      test: false
    };
  }
  render() {
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
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/demo-01" component={ControlPanel} />
            <Route exact path="/demo-02" component={Todo} />
            <Redirect form="*" to="/404"/>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
