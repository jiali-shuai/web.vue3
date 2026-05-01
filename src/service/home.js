

import axios from '../utils/axios'

// 导出一个函数，用于获取首页信息
export function getHome() {
  // 使用axios发送get请求，获取首页信息
  return axios.get('/index-infos');
}

