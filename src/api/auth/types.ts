/**
 * 登录请求参数
 */
export interface LoginData {
  /**
   * 用户名
   */
  username: string
  /**
   * 密码
   */
  password: string
}

/**
 * 登录响应参数
 */
export interface LoginResult {
  /**
   * 用户ID
   */
  userId: number
  /**
   * 用户名
   */
  username: string
  /**
   * token
   */
  accessToken: string
  /**
   * token类型
   */
  tokenType: string
}
