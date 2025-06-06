<template>
  <div>
    <RouterLink to="/home">主页</RouterLink><br />
    <RouterLink to="/blog">博客</RouterLink><br />
  </div>
  <div><RouterView></RouterView></div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>
<style scoped></style>
