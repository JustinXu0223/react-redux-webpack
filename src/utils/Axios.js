/**
 * @component Axios.js
 * @description axios 封装请求库
 * @time 2018/4/10
 * @author JOKER XU
 */
import axios from 'axios'

const BASE_URL = process.env.BASE_API_ENDPOINT

axios.defaults.baseURL = BASE_URL
// Add a request interceptor
axios.interceptors.request.use((config) => {
  return config
})

// Add a response interceptor
axios.interceptors.response.use((response) => {
  if (Object.is(200, response.status)) return response.data
  return response
})


export default axios

export const getTokenHeader = () => {
  const token = sessionStorage.getItem('token')
  return { headers: { 'Authentication-Token': token } }
}
