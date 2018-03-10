/**
 * @component store
 * @description Store配置
 * @time 2018/3/10
 * @author JOKER XU
 */

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { routerReducer } from 'react-router-redux';

import {reducer as todoReducer} from '../pages/Todo/TodoList';
import {reducer as filterReducer} from '../pages/Todo/Filter';

const win = window;

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  routing: routerReducer,
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  //  检查reducer 是否违反了作为一个纯函数的规定擅自修改了参数 state
  // middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
