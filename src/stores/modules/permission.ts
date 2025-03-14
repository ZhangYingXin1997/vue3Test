// import { constantRoutes } from '@/router'
// import { defineStore } from 'pinia'
// import { type RouteRecordRaw } from 'vue-router'
// import { listRoutes } from '@/api/menu'

// export const usePermissionStore = defineStore('permission', () => {
//   const routes = ref<RouteRecordRaw[]>([])
//   function setRoutes(newRoutes: RouteRecordRaw[]) {
//     routes.value = constantRoutes.concat(newRoutes)
//   }

//   function generateRoutes(roles: string[]) {
//     return new Promise((resolve, reject) => {
//       listRoutes()
//         .then(({ data: asyncRoutes }) => {
//           const accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
//           setRoutes(accessRoutes)
//           resolve(accessRoutes)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   }
//   return {
//     routes,
//     setRoutes,
//     generateRoutes,
//   }
// })
