

import axios from '../utils/axios'

// 导出一个函数，用于创建订单
export function createOrder(params) {
  // 使用axios发送post请求，将params参数作为请求体发送到/saveOrder接口
  return axios.post('/saveOrder', params);
}

// 导出一个函数，用于获取订单列表
export function getOrderList(params) {
  // 使用axios发送get请求，获取订单列表
  return axios.get('/order', { params });
}

// 导出一个函数，用于获取订单详情
export function getOrderDetail(id) {
  // 使用axios发送get请求，获取订单详情
  return axios.get(`/order/${id}`);
}

export function cancelOrder(id) {
  return axios.put(`/order/${id}/cancel`);
}

export function confirmOrder(id) {
  return axios.put(`/order/${id}/finish`)
}

export function payOrder(params) {
  return axios.get('/paySuccess', { params })
}




