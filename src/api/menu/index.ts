import request from '@/utils/request'
import { type AxiosPromise } from 'axios'

/**
 * 登录
 * @param data {LoginRequest}
 */
export const getRoutes = (data: object): AxiosPromise<Array<string>> => {
  return request({
    url: '/auth/login',
    method: 'get',
    params: data,
  })
}
