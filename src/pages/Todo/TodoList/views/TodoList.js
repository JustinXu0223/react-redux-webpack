// css 动画库
import TransitionGroup from 'react-addons-css-transition-group'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import {bindActionCreators} from 'redux'
import TodoItem from './TodoItem.js'
import { toggleTodo, removeTodo } from '../actions.js'
import { FilterTypes } from '../../../../constants'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  function mapList() {
    if (!todos || todos.length === 0) return null
    return todos.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        completed={item.completed}
        onToggle={() => onToggleTodo(item.id)}
        onRemove={() => onRemoveTodo(item.id)}
      />
    ))
  }
  return (
    <ul className="todo-list">
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
        {mapList()}
      </TransitionGroup>
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed)
    default:
      throw new Error('unsupported filter')
  }
}

/*const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  }
}*/
const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state.todos, state.filter)
})

/*const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id))
    }
  }
}*/

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch)
*/

const mapDispatchToProps = ({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

