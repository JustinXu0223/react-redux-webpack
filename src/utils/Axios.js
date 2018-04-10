/**
 * @component Axios.js
 * @description axios 封装请求库
 * @time 2018/4/10
 * @author JOKER XU
 */
import axios from 'axios';
// import { Toast } from 'antd-mobile'

const BASE_URL = process.env.REACT_APP_API_ENDPOINT

axios.defaults.baseURL = BASE_URL
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Toast.loading('加载中...')
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Toast.hide()
  return response;
});

// common check
const checkStatus = response => {
  if (Object.is(200, response.status)) return response.data
  throw new Error(response.status);
};

// common error
const handleError = promise => {
  return promise
    .then(response => checkStatus(response))
    .catch(code => {
      // Toast.fail('服务器发生未知错误', 1)
      // TODO you can handle the common error here
      throw new Error('服务器发生未知错误');
    });
};

export default {
  /** Get Request
   * @param url: string
   * @param params example {key: value}
   * @returns Promise<any>
   */
  get: function (url, params) {
    const promise = axios.get(url, {
      params: params
    });
    return handleError(promise);
  },
  /*** Post Request
   * @param url
   * @param params example {key: value}
   * @returns Promise<any>
   * */
  postJSON: function (url, params) {
    const promise = axios.post(url, {
      params: JSON.stringify(params)
    });
    return handleError(promise);
  },
  /*** Post Request
   * @param url
   * @param params example {key: value}
   * @returns Promise<any>
   * */
  patchJSON: function (url, params) {
    const promise = axios.patch(url, {
      params: JSON.stringify(params)
    });
    return handleError(promise);
  },
};

export { axios };
