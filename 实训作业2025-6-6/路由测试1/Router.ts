//创建路由器，并暴露
//引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
//引入组件
import home from './view/Home.vue'
import about from './view/About.vue'
import news from './view/New.vue'

//定义路由
const routes = [
  {
    path: '/home',
    component: home,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/news',
    component: news,
  },
]

//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//暴露路由器
export default router
