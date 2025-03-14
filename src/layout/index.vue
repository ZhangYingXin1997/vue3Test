<template>
  <div>
    {{ text }}
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
const text = ref<string>('hello world')
</script>

<script lang="ts">
export default {
  name: 'base-layout',
}
</script>

<style scoped>
</style>