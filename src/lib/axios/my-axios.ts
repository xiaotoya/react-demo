import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 超时时间

});

// 请求拦截器
http.interceptors.request.use(config => {
  // 在发送请求之前做些什么，比如添加认证令牌
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(response => {
  // 对响应数据做点什么，比如统一处理错误
  if (!response.data.success) {
    throw new Error(response.data.message || 'Error');
  }
  return response.data;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http;