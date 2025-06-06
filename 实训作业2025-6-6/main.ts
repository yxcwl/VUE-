// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')s

// // 引入Vue核心库
// import { createApp } from 'vue'
// import './assets/main.css'
// //引入ElementPlus组件库
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// //引入组件复用的App.vue，根组件
// import App from './App.vue'
// //引入路由
// // import router from './router'
// // import { createPinia } from 'pinia'

// //创建Vue应用实例
// const app = createApp(App)
// //使用路由
// // app.use(router)
// app.use(ElementPlus)
// app.mount('#app')

//测试路由模块，调用路由组件
// import { createApp } from 'vue'
// import './assets/main.css'
// import App from './components/路由/App.vue'
// import router from './components/路由/router'
// import { createPinia } from 'pinia'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

//路由测试测试
// import { createApp } from 'vue'
// import './assets/main.css'
// import App from './components/路由测试/App.vue'
// import router from './components/路由测试/Router'
// import { createPinia } from 'pinia'
// import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'

// const app = createApp(App)
// app.use(ElementPlus) // 使用 ElementPlus 组件库
// app.use(createPinia())
// app.use(router)

// app.mount('#app')

//生命周期测试
import { createApp } from 'vue'
import './assets/main.css'
import App from './components/生命周期/App.vue'
import { ElEmpty } from 'element-plus'

const app = createApp(App)

app.use(ElEmpty) // 注册 ElementPlus 的 ElEmpty 组件
app.mount('#app')
// 注册 ElementPlus 的 ElEmpty 组件
