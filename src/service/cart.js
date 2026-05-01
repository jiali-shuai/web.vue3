
import axios from '../utils/axios'

// 导出一个函数addCart，用于向购物车添加商品
export function addCart(params) {
  // 使用axios.post方法向/shop-cart接口发送post请求，参数为params
  return axios.post('/shop-cart', params);
}

// 导出一个函数，用于修改购物车
export function modifyCart(params) {
  // 使用axios的put方法，向/shop-cart接口发送请求，并将params作为参数传递
  return axios.put('/shop-cart', params);
}

// 导出一个函数，用于获取购物车信息
export function getCart(params) {
  // 使用axios发送get请求，获取购物车信息
  return axios.get('/shop-cart', { params });
}

// 导出一个函数，用于删除购物车中的商品
export function deleteCartItem(id) {
  // 使用axios发送delete请求，删除指定id的商品
  return axios.delete(`/shop-cart/${id}`);
}
// 
// 导出一个函数，用于根据购物车项ID获取数据
export function getByCartItemIds(params) {
  // 使用axios发送get请求，请求地址为'/shop-cart/settle'，参数为params
  return axios.get('/shop-cart/settle', { params });
}

