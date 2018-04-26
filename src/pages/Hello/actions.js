/**
 * @component actions.js
 * @description Hello 动作
 * @time 2018/3/14
 * @author JOKER XU
 */
import { message } from 'antd'
import { put, call, take, fork } from 'redux-saga/effects'
import * as Types from './actionTypes'
import DemoService from '../../services/Demo'

export const incrementAction = (id) => ({
  type: Types.INCREMENT_REQUEST,
  id: id
})

export const decreaseAction = (id) => ({
  type: Types.DECREASE_REQUEST,
  id: id
})

// callback
export function* incrementAsync() {
  while (true) {
    const { id } = yield take(Types.INCREMENT_REQUEST)
    const hide = message.loading('loading', 0)
    try {
      yield call(DemoService.delay, 2000)
      yield put({
        type: Types.INCREMENT,
        id: id
      })
    } catch (err) {
      // yield put({type: actionTypes.ERROR})
    } finally {
      hide()
    }
  }
}

export function* decreaseAsync() {
  while (true) {
    const { id } = yield take(Types.DECREASE_REQUEST)
    const hide = message.loading('loading', 0)
    try {
      yield call(DemoService.delay, 2000)
      yield put({
        type: Types.DECREASE,
        id: id
      })
    } catch (err) {
      // yield put({type: actionTypes.ERROR})
    } finally {
      hide()
    }
  }
}

export function* HelloFlow() {
  yield fork(incrementAsync)
  yield fork(decreaseAsync)
}
