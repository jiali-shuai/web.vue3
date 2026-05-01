
import axios from '../utils/axios'

// 导出一个函数addAddress，用于添加地址
export function addAddress(params) {
  // 使用axios.post方法，向'/address'接口发送post请求，参数为params
  return axios.post('/address', params);
}

// 导出一个名为EditAddress的函数，用于编辑地址
export function EditAddress(params) {
  // 使用axios的put方法，向'/address'接口发送请求，并将params作为参数传递
  return axios.put('/address', params);
}

// 导出一个函数DeleteAddress，用于删除地址
export function DeleteAddress(id) {
  // 使用axios发送delete请求，删除指定id的地址
  return axios.delete(`/address/${id}`);
}

// 导出一个函数，用于获取默认地址
export function getDefaultAddress() {
  // 使用axios发送get请求，获取默认地址
  return axios.get('/address/default');
}

// 导出一个函数，用于获取地址列表
export function getAddressList() {
  // 使用axios发送get请求，获取地址列表
  return axios.get('/address', { pageNumber: 1, pageSize: 1000 })
}

// 导出一个函数，用于获取地址详情
export function getAddressDetail(id) {
  // 使用axios发送get请求，获取地址详情
  return axios.get(`/address/${id}`)
}


