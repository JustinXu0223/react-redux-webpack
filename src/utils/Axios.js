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


export { axios };
