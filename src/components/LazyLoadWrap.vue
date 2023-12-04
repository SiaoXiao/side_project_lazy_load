<template>
  <div class="grid min-h-[500px] grid-cols-1 gap-4 mt-4 md:grid-cols-2 imageContainer">
    <slot></slot>
  </div>
  <div v-show="props.isLoading" ref="loadingRef" class="animate-spin"></div>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['dataCheck'])

const loadingRef = ref(null)

const options = {
  root: document.querySelector('.imageContainer'),
  rootMargin: '-500px 0px 500px 0px',
  threshold: 0,
  delay: 500
}

const getData = () => {
  emit('dataCheck')
}

const callback = ([entry]) => {
  if (entry && entry.isIntersecting) getData()
}

const observer = new IntersectionObserver(callback, options)

watch(
  () => props.isLoading,
  (newVal) => {
    if (newVal) {
      observer.observe(loadingRef.value)
    } else {
      observer.unobserve(loadingRef.value)
    }
  }
)

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>
