<template>
  <div>
    <h2>生命周期演示</h2>
    <p>计数: {{ count }}</p>
    <button @click="count++">增加</button>
    <button @click="showChild = !showChild">切换子组件</button>
    <ChildComponent v-if="showChild" />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
import ChildComponent from './view/Child.vue'

const count = ref(0)
const showChild = ref(false)

console.log('1. setup - 替代created/beforeCreate')

// 挂载阶段
onBeforeMount(() => {
  console.log('3. onBeforeMount - DOM挂载前')
})

onMounted(() => {
  console.log('4. onMounted - DOM挂载完成')
  // 示例：添加事件监听
  window.addEventListener('resize', handleResize)
})

// 更新阶段
onBeforeUpdate(() => {
  console.log('5. onBeforeUpdate - 数据更新前')
})

onUpdated(() => {
  console.log('6. onUpdated - 数据更新完成')
})

// 卸载阶段
onBeforeUnmount(() => {
  console.log('7. onBeforeUnmount - 组件卸载前')
  // 清理工作
  window.removeEventListener('resize', handleResize)
})

onUnmounted(() => {
  console.log('8. onUnmounted - 组件卸载完成')
})

function handleResize(this: Window, ev: UIEvent) {
  throw new Error('Function not implemented.')
}
</script>
