/**
 * @component index.js
 * @description 入口文件
 * @time 2018/3/6
 * @author JOKER XU
 */
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './routers';
import store from './store';

import './index.less';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!!!!');
}

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig history={history} />
  </Provider>,
  document.getElementById('root'),
);
