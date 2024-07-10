<template>
  <div class="grid grid-cols-6">
    <div class="col-span-2 border-r border-gray-200 dark:border-gray-800 p-5">
      <p v-for="category in categories" class="py-2 cursor-pointer"
         v-if="!resourceResponse.pending && resourceResponse.status === 'success'"
         :class="[selected === category.category ? 'text-blue-500 dark:bg-gray-800 dark:text-blue-500 bg-gray-100 p-2 rounded-lg font-medium' : '']"
         @click="categorySelected(category)">
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
                <UCard v-if="r.source === 'document'"
                       class="w-full h-[170px] bg-blue-600 hover:bg-blue-500 rounded-lg flex flex-col justify-end">
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
              <a v-for="r in resource" target="_blank" @click="isOpen = true">
                <UCard v-if="r.source === 'video'"
                       class="w-full h-[170px] bg-purple-600 hover:bg-purple-500 rounded-lg flex flex-col justify-end">
                  <UIcon class="justify-start text-white text-lg my-2" name="teenyicons:mp4-outline" dynamic/>

                  <div class="flex flex-col	justify-end">
                    <h3 class="text-lg text-white line-clamp-2">{{ r.title }}</h3>
                    <p class="text-sm line-clamp-1 text-white">{{ r.description }}</p>
                  </div>
                </UCard>
              </a>
            </div>

            <UModal v-model="isOpen">
              <div class="p-4">
                <vue-vimeo-player
                    video-id="916393160"
                />
              </div>
            </UModal>

          </div>

        </template>
      </UTabs>
      <Loader v-else/>
    </div>
  </div>
</template>

<script lang="ts" setup>

const isCategory = ref(true)
const isResource = ref(true)
const resource = ref([])
const categories = ref([])
const selected = ref('')
const isOpen = ref(false)
import {vueVimeoPlayer} from 'vue-vimeo-player'


const resourceResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

const resResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

const fetchResources = async () => {
  //Fetch all
  resourceResponse.value = await useFetch('/api/v1/resource', {
    baseURL: 'http://147.182.186.55:9098'
  })
  categories.value = getDistinctCategoriesAndIds(resourceResponse.value.data.data.results);
}


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


const categorySelected = async (category: any) => {
  // console.log(category)
  // selected.value = category
  //
  resResponse.value = await useFetch(`/api/v1/resource/${category.id}`, {
    baseURL: 'http://147.182.186.55:9098'
  })


  console.log(resResponse.value.data.data)

  // async function request() {
  //   const {data: resources, error} = await supabase
  //       .from('resources')
  //       .select()
  //       .eq('category', category)
  //   resource.value = resources
  // }
  //
  // isResource.value = true
  // request().then(data => {
  //   isResource.value = false
  // }).catch(error => {
  //   isResource.value = false
  // })

}


const getDistinctCategoriesAndIds = (resources): { category: string, id: string }[] => {
  const distinctItems: { category: string, id: string }[] = [];

  resources.forEach(resource => {
    if (!distinctItems.some(item => item.category === resource.category && item.id === resource.id)) {
      distinctItems.push({category: resource.category, id: resource.id});
    }
  });

  return distinctItems;
};

onMounted(() => {
  fetchResources()
  // isCategory.value = true
  // getAllCategories().then(data => {
  //   // categorySelected(categories.value[0].category)
  //   isCategory.value = false
  // }).catch(error => {
  //   isCategory.value = false
  // })
})


</script>

<style scoped>

</style>
