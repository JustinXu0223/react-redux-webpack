/**
 * @component index.js
 * @description 入口文件
 * @time 2018/3/6
 * @author JOKER XU
 */
import _ from 'lodash';
import './index.less';
import Icon from './logo.png';
function component() {
  let element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello23123123', 'webpack'], ' ');

  element.classList.add('hello');
  // 将图像添加到我们现有的 div。
  let myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());