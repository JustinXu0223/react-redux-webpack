/**
 * @component index.js
 * @description TODO组件
 * @time 2018/3/4
 * @author JOKER XU
 */
import React from 'react'
import Todos from './TodoList'
import Filter from './Filter'

function Todo() {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  )
}

export default Todo
