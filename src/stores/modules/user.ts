import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/api/auth'
import { type LoginData } from '@/api/auth/types'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('token')
  const roles = ref<string[]>(['role1'])

  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((response) => {
          const { accessToken, tokenType } = response.data
          token.value = `${tokenType} ${accessToken}`
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  return { token, roles, login }
})
