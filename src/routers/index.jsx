/**
 * @component routers
 * @description 路由配置
 * @time 2018/4/4
 * @author JOKER XU
 **/
import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import { Route, Switch} from 'react-router-dom';

import { view as App } from '../pages/App';
import Error from '../pages/Error';

const RouterConfig = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/404" component={Error} />
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  );
};

export default RouterConfig;
