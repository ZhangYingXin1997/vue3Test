import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      eslintrc: {
        enabled: false, // 是否自动生成 eslint 规则，建议生成之后设置 false
        filepath: './.eslintrc-auto-import.json', // 指定自动导入函数 eslint 规则的文件
      },
      resolvers: [
        ElementPlusResolver(), // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox, ElNotification 等
      ],
      vueTemplate: true, // 是否支持 Vue 模板内使用
      dts: path.resolve(pathSrc, 'types', 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
    }),
    Components({
      resolvers: [
        ElementPlusResolver(), // 自动导入 Element Plus 组件
      ],
      dts: path.resolve(pathSrc, 'types', 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
