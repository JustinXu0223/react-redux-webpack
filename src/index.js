/**
 * @component index.js
 * @description 入口文件
 * @time 2018/3/6
 * @author JOKER XU
 */
import _ from 'lodash';
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());