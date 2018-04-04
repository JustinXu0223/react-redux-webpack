import fetch from 'isomorphic-fetch';

let BaseUrl = ''
// development api
if (process.env.NODE_ENV !== 'production') {
  BaseUrl = 'http://192.168.1.29:8849';
}

export default {
  /**
   * 基于 fetch 封装的 GET请求
   * @param url
   * @param params {}
   * @param headers
   * @returns {Promise}
   */
  get: function (url, params, headers) {
    if (params) {
      const paramsArray = [];
      //encodeURIComponent
      Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));
      if (url.search(/\?/) === -1) {
        url = `${url}?${paramsArray.join('&')}`;
      } else {
        url = `${url}&${paramsArray.join('&')}`;
      }
    }
    return new Promise((resolve, reject) => {
      fetch(`${BaseUrl}${url}`, {
        method: 'GET',
        headers: headers,
      }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject(new Error({status: response.status}));
        }
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(new Error({status: -1}));
      });
    });
  },
  /**
   * 基于 fetch 封装的 POST请求  FormData 表单数据
   * @param url
   * @param formData
   * @param headers
   * @returns {Promise}
   */
  postForm: function (url, formData, headers) {
    return new Promise(function (resolve, reject) {
      fetch(`${BaseUrl}url`, {
        method: 'POST',
        headers: headers,
        body: formData,
      }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject(new Error({status: response.status}));
        }
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(new Error({status: -1}));
      });
    });
  },
  /***
   *  post请求
   *  url:请求地址
   *  params:参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
   * */
  postJSON: function (url, params) {
    return new Promise((resolve, reject) => {
      fetch(`${BaseUrl}url`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject(new Error({status: response.status}));
        }
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(new Error({status: -1}));
      });
    });
  }
};

