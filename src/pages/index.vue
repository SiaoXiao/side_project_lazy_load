<template>
  <main>
    <div class="w-full h-full p-3">
      <h1 class="text-6xl font-bold tracking-wider text-center text-[#272727] p-2">Lazy Load</h1>
      <List :isLoading="isLoading" @dataCheck="handleDataCheck">
        <ListItem :data="displayedData" />
      </List>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios'

const isLoading = ref(false)
const allData = ref([])
const displayedData = ref([])
const currentIndex = ref(0)

const fetchData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  await axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        allData.value = [...res.data]
      }
      displayedData.value = allData.value.slice(0, 30)
      currentIndex.value = 30
      isLoading.value = true
    })
    .catch(() => {
      isLoading.value = false
    })
}

const handleDataCheck = () => {
  if (allData.value.length > displayedData.value.length) {
    const newData = allData.value.slice(currentIndex.value, currentIndex.value + 10)
    displayedData.value = [...displayedData.value, ...newData]
    currentIndex.value += 10
  } else {
    isLoading.value = false
  }
}

onMounted(async () => {
  await fetchData()
})
</script>
