/**
 * @component todoList
 * @description todoList功能打包
 * @time 2018/3/4
 * @author JOKER XU
 */
import * as actions from './actions.js'
import reducer from './reducer.js'
import view from './views/Todos.js'

export {
  view as default,
  actions,
  reducer
}
