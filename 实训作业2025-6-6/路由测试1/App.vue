<!-- <template>
  <div>我们将在这里测试路由功能。</div>
  <div>
    <RouterLink to="/home">首页</RouterLink><br />
    <RouterLink to="/news">新闻</RouterLink><br />
    <RouterLink to="/about">关于</RouterLink><br />
  </div>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <div class="common-layout">
    <el-container>
      <el-header> <h2>我们将在这里测试路由功能。</h2></el-header>
      <el-main>
        <div class="r1">
          <RouterLink to="/home">首页</RouterLink>
          <RouterLink to="/news">新闻</RouterLink>
          <RouterLink to="/about">关于</RouterLink>
        </div>
      </el-main>
      <el-footer><RouterView></RouterView></el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h2 {
  text-align: center;
}
.r1 {
  text-align: center;
}
</style> -->

<template>
  <div class="common-layout">
    <el-container class="fixed-container">
      <el-header>
        <h2>我们将在这里测试路由功能。</h2>
      </el-header>
      <el-main>
        <div class="r1">
          <RouterLink to="/home" active-class="r1-1">首页</RouterLink>
          <RouterLink to="/news" active-class="r1-1">新闻</RouterLink>
          <RouterLink to="/about" active-class="r1-1">关于</RouterLink>
        </div>
      </el-main>
      <el-footer>
        <div class="r2"><RouterView></RouterView></div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto; /* 允许内容滚动 */
}

.fixed-container {
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-y: auto; /* 允许内容滚动 */
}

.fixed-container .el-header {
  background-color: #200443;
  color: aqua;
  border-bottom: 1px solid #e0e0e0;
}

.fixed-container .el-footer {
  background-color: #200443;
  color: aqua;
  border-top: 1px solid #e0e0e0;
}

/* 其他样式保持不变 */
h2 {
  background-color: #084887;
  text-align: center;
  padding: 20px 0;
  color: white;
}

.r1 {
  text-align: center;
  padding: 20px 0;
  background-color: greenyellow;
}

.r1 a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.r1 a:hover {
  color: #409eff;
}

.r1 a.r1-1 {
  font-weight: 900;
  text-shadow: 0 0 5px black;
}
.r2 {
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
  min-height: calc(100vh - 120px); /* 确保内容区域至少有一定高度 */
}

.el-footer {
  padding: 20px;
  text-align: center;
}
</style>
