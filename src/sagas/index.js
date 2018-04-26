/**
 * @component index.js
 * @description sage配置
 * @time 2018/4/24
 * @author JOKER XU
 */

import { fork } from 'redux-saga/effects'
import { actions as HelloAction } from '../pages/Hello'

export default function* rootSaga() {
  yield fork(HelloAction.HelloFlow)
}
