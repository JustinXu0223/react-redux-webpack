/**
 * @component routers
 * @description 路由配置
 * @time 2018/3/9
 * @author jokerXu
 **/
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '../pages/app';
import ControlPanel from '../pages/ControlPanel';
import Error from '../pages/Error';

// ControlPanel
/*const getControlPanelPage = (location, callback) => {
  require.ensure ([], function (require) {
    callback(null, require ('../pages/ControlPanel').default);
  }, 'controlPanel');
};

// Error
const getErrorPage = (location, callback) => {
  require.ensure ([], function (require) {
    callback(null, require ('../pages/Error').default);
  }, 'error');
};*/

const RouterConfig = ({ history})=> {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/demo-01" component={ControlPanel} />
            <Route path="/404" component={Error} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
    )
};

export default RouterConfig;
