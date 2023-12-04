<template>
  <RouterView :key="$route.fullPath"></RouterView>
  <div v-show="isActive" class="scrollBtn" @click.passive="handleScrollTop">↑</div>
</template>

<script setup>
// 滾輪按鈕開關
const isActive = ref(false)
// 顯示滾輪按鈕
const handleScroll = () => {
  if (window.scrollY >= 100) {
    isActive.value = true
  } else {
    isActive.value = false
  }
}
// 回到最上層
const handleScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
  isActive.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.oncontextmenu = () => false
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
