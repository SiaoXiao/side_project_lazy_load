<template>
  <main>
    <div class="w-full h-full p-3">
      <h1 class="projectTitle">lazy load component</h1>

      <div v-show="isShow">
        <LazyLoadWrap :isLoading="isLoading" @dataCheck="handleDataCheck">
          <Card :data="displayedData" />
        </LazyLoadWrap>
      </div>

      <div v-show="!isShow">
        <FormFieldsHandler :isDisabled="isDisabled" @handleSubmit="handleDataRequest" />
      </div>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios'

const isLoading = ref(false)
const isShow = ref(false)
const isDisabled = ref(false)
const allData = ref([])
const displayedData = ref([])
const currentIndex = ref(0)

const fetchData = async (val) => {
  isDisabled.value = true
  const url = `https://api.github.com/users/${val}/repos`
  await axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        const newData = res.data.map((item) => ({
          title: item.name,
          description: item.description,
          visibility: item.visibility,
          language: item.language,
          pushed_at: item.pushed_at.split('T')[0],
          link: item.html_url
        }))
        allData.value = [...newData]
      }
      displayedData.value = allData.value.slice(0, 10)
      currentIndex.value = 10
      isLoading.value = true
      isShow.value = true
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 404) {
          console.error('請求的資源不存在！')
        } else if (error.response.status >= 500) {
          console.error('服務器內部錯誤，請稍後再試！')
        } else {
          console.error('發生了一個錯誤:', error.response.data.message)
        }
      } else {
        console.error('發生了一個錯誤:', error.message)
      }
      isLoading.value = false
    })
    .finally(() => {
      isDisabled.value = false
    })
}

const handleDataRequest = (val) => {
  if (val === '') return
  fetchData(val)
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
</script>
