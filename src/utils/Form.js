/**
 * @component utils
 * @description 表单验证
 * @time 2018/2/11
 * @author JOKER XU
 */

// 验证电话号码
export const USERNAME = /^(0|86|17951)?1[0-9]{10}/

/** 验证用户名
 * @param  str 字段
 * @param  pattern 正则
 * @return 错误消息
 */
export const verifyUsername = (str, pattern = USERNAME) => {
  if (pattern.test(str)) return null
  return '请正确输入手机号'
}

// 密码强度正则，最少6位，包括至少1个大小写字母，1个数字
// export const PASSWORD = /^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z]).*$/
export const PASSWORD = /[a-zA-Z/\d+!@#$%^&*]{6,16}/

/** 验证密码
 * @param  str 字段
 * @param  pattern 正则
 * @return 错误消息
 */
export const verifyPassWord = (str, pattern = PASSWORD) => {
  if (pattern.test(str)) return null
  return '请输入6-16位数字、字母、字符密码'
}

// 中文，英文字母和数字:
export const NAME = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/

/** 验证用户名
 * @param  str 字段
 * @param  pattern 正则
 * @return 错误消息
 */
export const verifyName = (str, pattern = NAME) => {
  if (pattern.test(str)) return null
  return '昵称只限中文、大小写字母、数字'
}

// link链接
export const LINK = /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/

/** 验证密码
 * @param  str 字段
 * @param  pattern 正则
 * @return 错误消息
 */
export const verifyLink = (str, pattern = LINK) => {
  if (pattern.test(str)) return null
  return 'link链接不合法'
}
