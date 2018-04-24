/**
 * @component reducer
 * @description Hello 动作
 * @time 2018/3/14
 * @author JOKER XU
 */
import { INCREMENT, DECREASE } from './actionTypes'

const initValues = [
  {
    id: 1,
    title: 'First',
    number: 0,
  }, {
    id: 2,
    title: 'Second',
    number: 10,
  }, {
    id: 3,
    title: 'Third',
    number: 20,
  }
]

export default (state = initValues, action) => {
  switch (action.type) {
    case INCREMENT: {
      const newArr = state.map(value => {
        if (value.id === action.id) {
          value.number += 1
        }
        return value
      })
      return [...newArr]
    }
    case DECREASE: {
      const newArr = state.map(value => {
        if (value.id === action.id) {
          value.number -= 1
        }
        return value
      })
      return [...newArr]
    }
    default: {
      return state
    }
  }
}
