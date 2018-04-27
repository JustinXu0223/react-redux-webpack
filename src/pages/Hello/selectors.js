/**
 * @component selectors
 * @description
 * @time 2018/2/25
 * @author JOKER XU
 */
import { createSelector } from 'reselect'

const getList = (state) => state

const getCounter = createSelector(
  [getList],
  (list) => {
    let counter = 0
    list.forEach(value => {
      counter += Number(value.number)
    })
    return counter
  }
)

export {
  getCounter
}
