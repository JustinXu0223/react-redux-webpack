/**
 * @component actions.js
 * @description Hello 动作
 * @time 2018/3/14
 * @author JOKER XU
 */
import { INCREMENT, DECREASE } from './actionTypes';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const incrementAction = (id) => ({
  type: INCREMENT,
  id: id
});

export const decreaseAction = (id) => ({
  type: DECREASE,
  id: id
});
