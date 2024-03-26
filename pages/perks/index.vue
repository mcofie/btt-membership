<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-blue-200 h-[400px] w-full rounded-lg">

      </div>
    </div>

    <div class="w-full">
      <div class="w-2/4 flex flex-row my-5 space-x-3">
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Men" trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </UDropdown>

        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Women" trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </UDropdown>
      </div>

      <div class="grid grid-cols-3 gap-4 mt-5">
        <NuxtLink v-for="i in 12" :to="`/perks/${i}`">
          <UCard class="w-full h-[220px]">

          </UCard>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main'
})

const items = [
  [{
    label: 'Shirts',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Hoodies',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Pants & Shorts',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Accessories',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Jackets',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Bags',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]

</script>

<style scoped>

</style>
