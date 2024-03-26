<template>
  <div class="w-full">
    <div class="w-2/4 flex flex-row my-2 space-x-3">
      <USelect
          color="gray"
          variant="outline"
          size="md"
          :options="['United States', 'Canada', 'Mexico']"
      />

      <USelect
          color="gray"
          variant="outline"
          size="md"
          :options="['United States', 'Canada', 'Mexico']"
      />
    </div>

    <div class="grid grid-cols-4 gap-4 mt-7">
      <UCard class="w-full h-[220px]" v-for="i in 12">

      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>
