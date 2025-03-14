import request from '@/utils/request'
import { type AxiosPromise } from 'axios'
import { type LoginData, type LoginResult } from './types'

/**
 * 登录
 * @param data {LoginRequest}
 */
export const loginApi = (data: LoginData): AxiosPromise<LoginResult> => {
  return request({
    url: 'auth/login',
    method: 'post',
    data,
  })
}

/**
 * 测试接口
 * @param data {LoginRequest}
 */
export const testApi = (data: object): AxiosPromise<object> => {
  return request({
    url: 'auth/test-api',
    method: 'get',
    params: data,
  })
}
