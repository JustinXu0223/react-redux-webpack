/**
 * @component app.jsx
 * @description 主程序入口
 * @time 2018/3/10
 * @author JOKER XU
 */
import { Button } from 'antd'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import classNames from 'classnames'
import Loadable from 'react-loadable'
import { LoadingComponent } from '@/components/Common'

import Icon from '../images/logo.svg'
import styles from './index.less'

const AsyncHello = Loadable({
  loader: () => import('@/pages/Hello'),
  loading: LoadingComponent
})
const AsyncTodo = Loadable({
  loader: () => import('@/pages/Todo'),
  loading: LoadingComponent
})
const AsyncControlPanel = Loadable({
  loader: () => import('@/pages/ControlPanel'),
  loading: LoadingComponent
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      test: false
    }
  }
  render() {
    const { test } = this.state
    const cx = classNames({
      app: test,
      test: !test,
    })
    return (
      <div className={styles[cx]}>
        <header className={styles.header}>
          <img src={Icon} className={styles.logo} alt="logo" />
        </header>
        <ul style={{ marginTop: '20px' }} className={styles.nav}>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/demo-01">simpleDemo</Link></li>
          <li><Link to="/demo-02">TodoDemo</Link></li>
          <li><Link to="/404">404</Link></li>
          <li><Link to="/signIn">SignIn</Link></li>
        </ul>
        <section className={styles.section}>
          <p>内容
            <Button type="primary" onClick={() =>
              this.setState({ test: !test })
            }
            >Button</Button>
          </p>
          <Switch>
            <Route exact path="/" component={AsyncHello} />
            <Route exact path="/demo-01" component={AsyncControlPanel} />
            <Route exact path="/demo-02" component={AsyncTodo} />
            <Redirect form="*" to="/404"/>
          </Switch>
        </section>
      </div>
    )
  }
}

export default App
