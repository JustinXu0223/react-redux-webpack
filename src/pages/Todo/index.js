/**
 * @component index
 * @description
 * @time 2018/3/4
 * @author jokerXu
 */
import React from 'react'
import { view as Todos } from './TodoList'
import { view as Filter } from './Filter'

function Todo() {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  )
}

export default Todo
