<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 border-r border-gray-300 p-5">
      <p v-for="i in 7" class="py-5">Key notes</p>
    </div>
    <div class="col-span-5 p-5">
      <UTabs :items="items" class="w-full">
<!--        <template #account="{item}"></template>-->
      </UTabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main'
})

const items = [{
  label: 'Documents',
  content: ''
},  {
  label: 'Videos',
  content: ``
}]
</script>

<style scoped>

</style>
