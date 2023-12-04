<template>
  <article
    v-for="item in data"
    :key="item.id"
    class="overflow-hidden bg-white rounded-lg shadow-lg"
  >
    <div class="pb-[56.25%] relative">
      <img
        src="https://picsum.photos/seed/picsum/1280/720"
        class="absolute object-contain object-center"
        alt="Static Random Image"
        loading="lazy"
      />
    </div>
    <div class="w-full h-full p-3">
      <div class="flex items-center gap-2">
        <h2 class="flex-1 truncate listItemTitle">
          {{ `Title：${item.title}` }}
        </h2>
        <span class="px-2 py-[1px] text-sm font-bold text-white rounded-full bg-[#06C755]/80">{{
          item.visibility
        }}</span>
      </div>
      <div class="mt-3">
        <div class="flex flex-col gap-1">
          <span class="text-sm tracking-wide text-[#7D8590]">{{
            `Language ${item.language}`
          }}</span>
          <span class="text-[#7D8590] text-base tracking-wide">Description：</span>
          <p class="text-[#272727] text-base tracking-wide pl-4">
            {{ item.description ? item.description : '此專案沒撰寫描述' }}
          </p>
        </div>
        <div class="flex items-center justify-center mt-3">
          <a
            :href="item.link"
            target="_blank"
            class="inline-block px-4 py-2 text-base font-bold tracking-wide text-[#6278df] transition-colors rounded-md cursor-pointer hover:text-white border-2 border-[#6278df] hover:bg-[#6278df]"
            >專案連結</a
          >
        </div>
        <span
          class="mt-3 block text-xs tracking-wide text-right whitespace-nowrap text-[#7D8590]"
          >{{ `Updated ${item.pushed_at}` }}</span
        >
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>
