<template>
  <div class="grid grid-cols-6">
    <div class="col-span-2 border-r border-gray-200 p-5">
      <p v-for="category in categories" class="py-2 cursor-pointer" v-if="!isCategory"
         :class="[selected === category.category ? 'text-blue-500 bg-gray-100 p-2 rounded-lg font-medium' : '']"
         @click="categorySelected(category.category)">
        {{ category.category }}
      </p>
      <div v-else class="flex flex-col space-y-4">
        <USkeleton class="h-[50px] w-full" v-for="i in 10"/>
      </div>

    </div>
    <div class="col-span-4 p-5">
      <UTabs v-if="!isResource" :items="items" class="w-full">
        <template #item="{ item, index, selected }">

          <div v-if="item.key === 'documents'" class="space-y-3">
            <div class="grid grid-cols-4 gap-2">
              <a v-for="r in resource" target="_blank" :href="r.url_resource">
                <UCard class="w-full h-[170px] bg-blue-600 rounded-lg flex flex-col justify-end">
                  <UIcon class="justify-start text-white text-lg my-2" name="teenyicons:pdf-outline" dynamic/>

                  <div class="flex flex-col	justify-end">
                    <h3 class="text-lg text-white line-clamp-2">{{ r.title }}</h3>
                    <p class="text-sm line-clamp-1 text-white">{{ r.description }}</p>
                  </div>
                </UCard>
              </a>
            </div>
          </div>
          <div v-else-if="item.key === 'videos'" class="space-y-3">
            <div class="grid grid-cols-4 gap-2">
              <a v-for="r in resource" target="_blank" :href="r.url_resource">
                <UCard class="w-full h-[170px] bg-purple-600 rounded-lg flex flex-col justify-end">
                  <UIcon class="justify-start text-white text-lg my-2" name="teenyicons:mp4-outline" dynamic/>

                  <div class="flex flex-col	justify-end">
                    <h3 class="text-lg text-white line-clamp-2">{{ r.title }}</h3>
                    <p class="text-sm line-clamp-1 text-white">{{ r.description }}</p>
                  </div>
                </UCard>
              </a>
            </div>
          </div>

        </template>
      </UTabs>
      <Loader v-else/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const isCategory = ref(true)
const isResource = ref(true)
const resource = ref([])
const categories = ref([])
const selected = ref('')

definePageMeta({
  layout: 'main'
})

const items = [{
  key: 'documents',
  label: 'Documents',
  description: 'Make changes to your account here. Click save when you\'re done.'
}, {
  key: 'videos',
  label: 'Videos',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}]


const getAllCategories = async () => {
  let {data: resources, error} = await supabase
      .from('resources')
      .select('category', {distinct: true})
  categories.value = resources
}

const categorySelected = async (category: string) => {
  selected.value = category

  async function request() {
    const {data: resources, error} = await supabase
        .from('resources')
        .select()
        .eq('category', category)
    resource.value = resources
  }

  isResource.value = true
  request().then(data => {
    isResource.value = false
  }).catch(error => {
    isResource.value = false
  })

}

onMounted(() => {
  isCategory.value = true
  getAllCategories().then(data => {
    categorySelected(categories.value[0].category)
    isCategory.value = false
  }).catch(error => {
    isCategory.value = false
  })
})


</script>

<style scoped>

</style>
