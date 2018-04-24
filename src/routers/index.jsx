/**
 * @component routers
 * @description 路由配置
 * @time 2018/4/4
 * @author JOKER XU
 **/
import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { LoadingComponent } from '@/components/Common'

const AsyncSignIn = Loadable({
  loader: () => import('@/pages/SignIn'),
  loading: LoadingComponent
})
const AsyncApp = Loadable({
  loader: () => import('@/pages/App'),
  loading: LoadingComponent
})
const AsyncError = Loadable({
  loader: () => import('@/pages/NotFound'),
  loading: LoadingComponent
})

const RouterConfig = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/404" component={AsyncError} />
        <Route exact path="/signIn" component={AsyncSignIn}/>
        <Route path="/" component={AsyncApp} />
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig
