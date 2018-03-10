/**
 * @component routers
 * @description 路由配置
 * @time 2018/3/9
 * @author JOKER XU
 **/
import * as React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import App from '../pages/app';

// ControlPanel
const getControlPanelPage = (location, callback) => {
  require.ensure ([], function (require) {
    callback(null, require ('../pages/ControlPanel').default);
  }, 'controlPanel');
};

// TodoPage
const getTodoPage = (location, callback) => {
  require.ensure ([], function (require) {
	callback(null, require ('../pages/Todo').default);
  }, 'todo');
};

// Error
const getErrorPage = (location, callback) => {
  require.ensure ([], function (require) {
    callback(null, require ('../pages/Error').default);
  }, 'error');
};

const RouterConfig = ({ history })=> {
    return (
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute />
            <Route path="/demo-01" getComponent={getControlPanelPage} />
            <Route path="/demo-02" getComponent={getTodoPage} />
          </Route>
      
          <Route path="/404" getComponent={getErrorPage} />
          <Redirect from="*" to="/404" />
        </Router>
    )
};

export default RouterConfig;
