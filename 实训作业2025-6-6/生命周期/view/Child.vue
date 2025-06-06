<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>我是子路由界面</h2>
    <p>当前时间为：{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
const time = new Date().toLocaleTimeString()
</script>

<style scoped></style>
