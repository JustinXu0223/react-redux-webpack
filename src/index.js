/**
 * @component index.js
 * @description 入口文件
 * @time 2018/3/6
 * @author JOKER XU
 */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.less';
import RouterConfig from './routers';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!!!!');
}

ReactDOM.render(
    <RouterConfig />,
    document.getElementById('root')
);