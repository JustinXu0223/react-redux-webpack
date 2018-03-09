/**
 * @component routers
 * @description 路由配置
 * @time 2018/3/9
 * @author jokerXu
 **/
import * as React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from '../pages/app';

// ControlPanel
const getControlPanelPage = (location, callback) => {
  require.ensure ([], function (require) {
    callback(null, require ('../pages/ControlPanel').default);
  }, 'controlPanel');
};

// Error
const getErrorPage = (location, callback) => {
  require.ensure ([], function (require) {
    callback(null, require ('../pages/Error').default);
  }, 'error');
};

const RouterConfig = ({ history})=> {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute />
            <Route path="/demo-01" getComponent={getControlPanelPage} />
          </Route>
      
          <Route path="/404" getComponent={getErrorPage} />
          <Redirect from="*" to="/404" />
        </Router>
    )
};

export default RouterConfig;
