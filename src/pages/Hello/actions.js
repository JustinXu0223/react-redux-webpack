/**
 * @component actions.js
 * @description Hello 动作
 * @time 2018/3/14
 * @author JOKER XU
 */
import { INCREMENT, DECREASE } from './actionTypes';

import DemoService from '../../services/Demo'
export const incrementAction = (id) => ({
  type: INCREMENT,
  id: id
});

export const decreaseAction = (id) => ({
  type: DECREASE,
  id: id
});

// callback
export const incrementAsync = (id) => {
  return (dispatch) => {
    DemoService.delay(1000).then(data => {
      dispatch(incrementAction(id))
    })
  }
}

// callback
export const decreaseAsync = (id) => {
  return (dispatch) => {
    DemoService.delay(1000).then(data => {
      dispatch(decreaseAction(id))
    })
  }
}
