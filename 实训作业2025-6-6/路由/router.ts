//创建路由器，并暴露
//引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
//引入组件
import home from './view/Home.vue'
import blog from './view/Blog.vue'

//定义路由
const routes = [
  {
    path: '/home',
    component: home,
  },
  {
    path: '/blog',
    component: blog,
  },
]

//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//暴露路由器
export default router
