<template>
  <template v-if="props.data.length <= 0">
    <article v-for="i in 4" :key="i" class="defaultCard">
      <div class="h-full rounded-md bg-slate-300 animate-pulse"></div>
      <div class="relative flex flex-col justify-end w-full h-full">
        <h2 class="h-8 mt-2 rounded-md bg-slate-300 animate-pulse"></h2>
        <div class="mt-2 h-[104px] rounded-md bg-slate-300 animate-pulse"></div>
      </div>
    </article>
  </template>

  <article v-else v-for="item in data" :key="item.id" class="listItemCard">
    <img
      src="https://picsum.photos/seed/picsum/200/300"
      alt="Static Random Image"
      class="object-cover min-w-full h-1/2"
      loading="lazy"
    />
    <div class="relative w-full h-full">
      <h2 class="listItemTitle">
        {{ item.title }}
      </h2>
      <div class="mt-2 text-[#8B8B78] text-sm max-h-[104px] overflow-y-auto">
        <p>
          {{ item.body }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
