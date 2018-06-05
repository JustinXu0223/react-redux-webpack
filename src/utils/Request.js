import fetch from 'isomorphic-fetch'

let BASE_URL = ''
// development api
if (process.env.NODE_ENV !== 'production') {
  BASE_URL = 'http://192.168.1.29:8849'
}
// content-type
const ContentType = {
  JSON: 'application/json charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded charset=UTF-8'
}

// Http method
const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

// common check
const checkStatus = response => {
  if (Object.is(200, response.status)) return response.json()
  throw new Error(response.status)
}

// common error
const handleError = promise => {
  return promise
    .then(response => checkStatus(response))
    .catch(() => {
      // const { message: status } = error
      // TODO you can handle the common error here
      throw new Error('服务器发生未知错误')
    })
}

// handle url
const getUrl = (url) => {
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `${BASE_URL}${url}`
}

// token header
export const getTokenHeaders = () => {
  // TODO get the token permission request
  // const token = Cookies.get(COOKIE_TOKEN)
  const token = ''
  return {
    'Accept': ContentType.JSON,
    'Content-Type': ContentType.JSON,
    'Token': token
  }
}

// common header
const getHeaders = () => {
  return {
    'Accept': ContentType.JSON,
    'Content-Type': ContentType.JSON
  }
}

export default {
  /** GET请求
   * @param url: string
   * @param params {}
   * @param headers
   * @returns Promise<any>
   */
  get(url, params, headers = getHeaders()) {
    if (params) {
      const paramsArray = []
      // encodeURIComponent
      Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`))
      if (url.search(/\?/) === -1) {
        url = `${url}?${paramsArray.join('&')}`
      } else {
        url = `${url}&${paramsArray.join('&')}`
      }
    }
    const promise = fetch(getUrl(url), {
      method: HttpMethod.GET,
      headers: headers
    })
    return handleError(promise)
  },
  /** POST请求  FormData 表单数据
   * @param url
   * @param formData
   * @param headers
   * @returns Promise<any>
   */
  postForm(url, formData, headers = getHeaders()) {
    const promise = fetch(getUrl(url), {
      method: HttpMethod.POST,
      headers: headers,
      body: formData
    })
    return handleError(promise)
  },
  /*** POST 请求
   * @param url
   * @param params 参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
   * @param headers
   * @returns Promise<any>
   * */
  postJSON(url, params, headers = getHeaders()) {
    const promise = fetch(getUrl(url), {
      method: HttpMethod.POST,
      headers: headers,
      body: JSON.stringify(params)
    })
    return handleError(promise)
  },
  /*** PATCH 请求
   * @param url
   * @param params 参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
   * @param headers
   * @returns Promise<any>
   * */
  patchJSON(url, params, headers = getHeaders()) {
    const promise = fetch(getUrl(url), {
      method: HttpMethod.PATCH,
      headers: headers,
      body: JSON.stringify(params)
    })
    return handleError(promise)
  },
}

