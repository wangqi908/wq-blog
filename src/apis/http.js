/*
使用axios 封装的ajax 请求函数
函数返回的是promise 对象
*/
import axios from 'axios'
const { PROD_URL } = require('../../config')
export const baseURL = process.env.NODE_ENV === 'development' ? '/api' : `${PROD_URL}api/`

export const timeout = 20000 // 设置超时时间

axios.defaults.baseURL = baseURL
axios.defaults.timeout = timeout

export default function req(url, params = {}, method = 'GET', arr) {
  method = method.toLowerCase()
  if (method === 'post') {
    return axios.post(url, params)
  } else if (method === 'get') {
    return axios.get(url, {
      params
    })
  } else if (method === 'delete') {
    return axios.delete(url, params)
  } else if (method === 'put') {
    return axios.put(url, params)
  } else if (method == 'querypost') {
    // 拼接参数的post
    return axios({
      method: 'post',
      url,
      params
    })
  } else if (method == 'blob') {
    // 文件流
    return axios({
      method: 'get',
      url,
      params,
      responseType: 'blob'
    })
  } else if (method === 'upload') {
    let config = {
      headers: { 'Content-Type': 'multipart/form-data' }
      // onUploadProgress: progressEvent => {
      //   let progress = (((progressEvent.loaded / progressEvent.total) * 100) | 0) + '%'
      //   store.commit('setUploadProgress', progress)
      // }
    }
    return axios.post(url, params, config)
  } else if (method == 'all') {
    return axios.all(arr)
  } else {
    console.error('未知的method' + method)
    return false
  }
}
