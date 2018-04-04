/**
 * @component Base.js
 * @description 基础方法库
 * @time 2018/4/3
 * @author JOKER XU
 */
import { history } from './History';

const win = window;

export default {

  /** 跳转页面,替换路由
   * @params path {string} hash路径
   */
  replacePath(path) {
    if (!path) return false;
    history.replace(path);
  },

  /** 跳转到新页面
   * @params path {string} hash路径
   */
  linkToPath: (path) => {
    if (!path) return false;
    if (path.indexOf('.html') > -1) { // 客户端的路由
      win.location.href = path;
    } else {
      history.push(path);
    }
  },
};
