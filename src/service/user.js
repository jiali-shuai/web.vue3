

import axios from '../utils/axios'

// 导出一个函数，用于获取用户信息
export function getUserInfo() {
  // 使用axios发送get请求，获取用户信息
  return axios.get('/user/info');
}

// 导出一个函数，用于编辑用户信息
export function EditUserInfo(params) {
  // 使用axios的put方法，向/user/info接口发送请求，参数为params
  return axios.put('/user/info', params);
}

// 导出一个名为login的函数，用于用户登录
export function login(params) {
  // 使用axios发送post请求，请求地址为'/user/login'，请求参数为params
  return axios.post('/user/login', params);
}

// 导出一个名为logout的函数
export function logout() {
  // 使用axios发送post请求，请求地址为'/user/logout'
  return axios.post('/user/logout')
}

// 导出一个名为register的函数，用于用户注册
export function register(params) {
  // 使用axios发送post请求，将params参数作为请求体发送到/user/register接口
  return axios.post('/user/register', params);
}

