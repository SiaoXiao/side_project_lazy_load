<template>
  <div class="fromWrap">
    <h2 class="fromTitle">get data form gitHub repositories</h2>
    <hr />
    <div class="fromContainer">
      <div class="flex flex-col items-center p-3 rounded-md bg-slate-500 sm:flex-row">
        <div
          class="w-full sm:mr-4 text-base font-bold tracking-wide text-white capitalize whitespace-nowrap max-w-[200px]"
        >
          select default username
        </div>
        <div class="flex mt-4 sm:mt-0">
          <label class="mr-2 fromRadio" :class="{ active: selectName === 'SiaoXiao' }"
            >SiaoXiao
            <input v-model="selectName" type="radio" class="hidden" value="SiaoXiao" />
          </label>

          <label class="fromRadio" :class="{ active: selectName === 'antfu' }"
            >antfu<input v-model="selectName" type="radio" class="hidden" value="antfu"
          /></label>
        </div>
      </div>

      <div class="flex flex-col items-center p-3 rounded-md bg-slate-500 sm:flex-row">
        <div
          class="sm:mr-4 w-full text-base font-bold tracking-wide text-white capitalize whitespace-nowrap max-w-[200px]"
        >
          type other username
        </div>
        <input
          v-model="targetName"
          type="text"
          class="w-full pb-1 mt-4 text-white bg-transparent border-b-2 border-white outline-none sm:mt-0 caret-white"
        />
      </div>

      <div class="mt-4">
        <span class="mr-4 capitalize defaultText text-[#272727]"
          >confirm your search target is</span
        >
        <strong class="text-xl tracking-wide text-red-400">
          {{ displayValue }}
        </strong>
      </div>
    </div>
    <button
      type="button"
      class="primaryButton"
      :class="[isDisabled ? 'bg-[#4758a0] cursor-not-allowed' : '']"
      @click="submit"
      :disabled="isDisabled"
    >
      <span v-show="!isDisabled" class="flex h-[30px] items-center justify-center">
        get repositories
      </span>
      <div v-show="isDisabled" class="animate-spin" style="margin: 0 auto"></div>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['handleSubmit'])
defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})

const selectName = ref('')
const targetName = ref('')

const displayValue = computed(() => selectName.value || targetName.value)
const submit = () => {
  emit('handleSubmit', displayValue.value)
}

watch(selectName, (newVal) => {
  if (newVal) {
    targetName.value = ''
  }
})

watch(targetName, (newVal) => {
  if (newVal) {
    selectName.value = ''
  }
})
</script>
