/**
 * @component index.js
 * @description 入口文件
 * @time 2018/3/6
 * @author JOKER XU
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import _ from 'lodash';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!!!!');
}

ReactDOM.render(<App />, document.getElementById('root'));