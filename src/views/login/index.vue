<template>
  <div class="login">
    {{ text }}
    <el-button type="primary" @click="onClick">主要按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { testApi } from '@/api/auth'
const text = ref<string>('登录页面')
const bg_color = ref<string>('red')
const colorNumber = ref<number>(0)
const onClick = () => {
  testApi({}).then(res => {
    console.log('testApi', res);
  })
  colorNumber.value = ++colorNumber.value % 3
  bg_color.value = ['red', 'blue', 'green']?.[colorNumber.value]
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: v-bind(bg_color);
}
</style>