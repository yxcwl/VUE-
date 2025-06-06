<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <img src="../picture/vue.png" alt="图片" />
  </div>
</template>

<script setup lang="ts" name="Home">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.query) // 获取路由传递的参数
</script>

<style scoped>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
