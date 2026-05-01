

import axios from '../utils/axios'
// 
// 导出一个函数，用于获取商品详情
export function getDetail(id) {
  // 使用axios发送get请求，获取商品详情
  return axios.get(`/goods/detail/${id}`);
}
//   
// 导出一个函数，用于获取分类
export function getCategory() {
  // 使用axios发送get请求，获取分类
  return axios.get('/categories');
}
//   
// 导出一个名为search的函数，该函数接收一个参数params
export function search(params) {
  // 使用axios发送get请求，请求地址为'/search'，请求参数为params
  return axios.get('/search', { params });
}

