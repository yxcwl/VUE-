<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about">
    <h2>这里是关于页面</h2>

    <RouterLink to="/about/child">跳转到子路由</RouterLink>
    <h3><RouterView></RouterView></h3>
  </div>
</template>
<script setup lang="ts" name="about"></script>
<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: skyblue;
  font-size: 20px;
}
</style>
