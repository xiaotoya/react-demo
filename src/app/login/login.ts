import { constant } from '@/constant';
import http from '@/lib/axios/my-axios';

const API_URL = constant.api.login; // 替换为你的API端点

export const login = async (data: any) => {
  try {
    const response = await http.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error; // 可以选择重新抛出错误或处理错误
  }
};