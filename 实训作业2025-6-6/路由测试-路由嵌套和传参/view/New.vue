<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="New">
    <ul>
      <li><a href="./Home.vue">返回主页</a></li>
      <li><a href="./About.vue">返回关于</a></li>
      <li><a href="">页面1</a></li>
      <li><a href="">页面2</a></li>
      <li><a href="">页面3</a></li>
      <li><a href="">页面4</a></li>
      <li><a href="">页面5</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.New {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.New ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.New li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: skyblue;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
</style>
