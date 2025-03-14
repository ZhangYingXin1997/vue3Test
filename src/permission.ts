import router from './router'
import NProgress from 'nprogress'
import { useUserStore } from '@/stores/modules/user'

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = localStorage.getItem('token')
  if (hasToken) {
    const userStore = useUserStore()
    const hasRoles = userStore?.roles && userStore?.roles.length > 0
    if (hasRoles) {
      if (to.matched.length > 0) {
        next()
      } else {
        next(from.name ? { name: from.name } : '/404')
      }
    } else {
      try {
        const { roles } = await userStore.getUserInfo()
        const accessRoutes = await permissionStore.generateRoutes(roles)
        accessRoutes.forEach((route) => {
          router.addRoute(route)
        })
        next({ ...to, replace: true })
      } catch (error) {
        userStore.resetToken()
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
