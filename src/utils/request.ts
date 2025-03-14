import axios, { type InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { useUserStore } from '@/stores/modules/user'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore()
    if (userStore?.token) {
      config.headers['Authorization'] = userStore?.token
    }
    return config
  },
  (error) => {
    console.log('请求报错')
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message } = response.data
    if (code === 200) {
      return response.data
    }
    console.log(message || 'Error')
    return Promise.reject(new Error(message || 'Error'))
  },
  (error) => {
    console.log('请求报错')
    return Promise.reject(error)
  },
)

export default service
