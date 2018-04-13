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
  linkToPath(path) {
    if (!path) return false;
    if (path.indexOf('.html') > -1) { // 客户端的路由
      win.location.href = path;
    } else {
      history.push(path);
    }
  },
  // 电话pipe
  telPipe(value) {
    const reg = /^(\d{3})\d{4}(\d{4})$/
    return value.replace(reg, '$1****$2')
  },
  padLeftZero(str) {
    return (`00${str}`).substr(str.length)
  },
  // 格式化时间
  formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = `${o[k]}`
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
      }
    }
    return fmt
  },
  // 去除html中的标签
  replaceHtml(str) {
    if (!str) return ''
    return str.replace(/<[^>]+>/g, '')
  },
  // 获取字符串img标签
  matchImg(str) {
    if (!str) return ''
    return str.match(/<img.*?(?:>|\/>)/gi)
  },
  // 设置title
  setTitle(title = '') {
    document.title = title
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
      const i = document.createElement('iframe')
      i.src = '/static/favicon.ico'
      i.style.display = 'none'
      i.onload = function () {
        setTimeout(function () {
          i.remove()
        }, 9)
      }
      document.body.appendChild(i)
    }
  },
  // 处理搜索
  transformKeyword(value, keyword) {
    if (!keyword || !value) return value
    const reg = new RegExp(`(${keyword})`, 'ig')
    return value.replace(reg, `<span style="color: #ff4747;">${keyword}</span>`)
  },
};
