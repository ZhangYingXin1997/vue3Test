<template>
  <div>
    {{ text }}
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref<string>('登录页面')
</script>

<style scoped>
</style>