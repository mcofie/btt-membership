<template>
  <div class="grid grid-cols-6">
    <div class="col-span-2 border-r border-gray-300 p-5">
      <p v-for="category in categories" class="py-2" v-if="!isCategory">
        {{ category.category }}
      </p>
      <div v-else class="flex flex-col space-y-4">
        <USkeleton class="h-[50px] w-full" v-for="i in 10"/>
      </div>

    </div>
    <div class="col-span-4 p-5">
      <UTabs :items="items" class="w-full">
        <!--        <template #account="{item}"></template>-->
      </UTabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const isCategory = ref(true)
const categories = ref([])

definePageMeta({
  layout: 'main'
})

const items = [{
  label: 'Documents',
  content: ''
}, {
  label: 'Videos',
  content: ``
}]

const getAllCategories = async () => {
  let {data: resources, error} = await supabase
      .from('resources')
      .select('category')
  categories.value = resources
  console.log(resources)
}

onMounted(() => {
  isCategory.value = true
  getAllCategories().then(data => {
    isCategory.value = false
  }).catch(error => {
    isCategory.value = false
  })
})


</script>

<style scoped>

</style>
