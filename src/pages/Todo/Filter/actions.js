/**
 * @component filter
 * @description filter动作
 * @time 2018/3/4
 * @author jokerXu
 */

import { SET_FILTER } from './actionTypes.js';

export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
});
