<template>
  <div>
    <div class="flex flex-row">
      <div
          class="bg-gradient-to-r from-purple-500 to-pink-500 h-[400px] w-full flex items-center rounded-2xl justify-center">
        <div class="p-5 flex flex-col items-center justify-center align-middle">
          <h2 class="text-5xl font-bold text-white">Save 15% On all Hoodies</h2>
          <p class="my-2 text-white">Use code <span class="font-bold underline decoration-wavy">‘Hoodie15’</span> at
            Checkout</p>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="w-2/4 flex flex-row my-5 space-x-3">
        <USelectMenu :options="items2" :popper="{ placement: 'bottom-start' }" v-model="gender">
          <UButton color="white" :label="gender" trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </USelectMenu>

        <USelectMenu :options="items" :popper="{ placement: 'bottom-start' }" v-model="category">
          <UButton color="white" :label="category" trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </USelectMenu>

        <UButton @click="getAllPerks()" label="Clear">
          <template #trailing>
            <UIcon name="mdi:close" class="w-5 h-5" dynamic/>
          </template>
        </UButton>

      </div>

      <div class="grid grid-cols-3 gap-4 mt-5" v-if="!isPerksPending">
        <NuxtLink v-for="(perk,index) in prks" :to="`/perks/${perk.id}`">
          <UCard class="w-full p-0">
            <object :data="perk.image_url" :style="{height:'300px', objectFit:'contain'}" class="w-full z-10"/>
            <div class="z-20 w-full bg-gray-50 rounded-lg p-5">
              <p class="text-xl font-bond">{{ perk.product_name }}</p>
              <p class="text-sm">${{ perk.price }}</p>
            </div>
          </UCard>
        </NuxtLink>
      </div>
      <div v-else>
        <div class="grid grid-cols-3 gap-4 mt-5">
          <USkeleton class="h-[250px]" v-for="i in 12"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const isPerksPending = ref(true)
const prks = ref([])
const gender = ref('men')
const category = ref('hoodies')

definePageMeta({
  layout: 'main'
})

watch(gender, async (newGender: string, oldGender: string) => {
  await getAllPerksSex(newGender)
})

watch(category, async (newCategory: string, oldCategory: string) => {
  await getAllPerksType(newCategory)
})


const getAllPerks = async () => {
  isPerksPending.value = true
  try {
    const {data: perks, error} = await supabase
        .from('perks')
        .select('*')
    prks.value = perks
    isPerksPending.value = false
  } catch (e) {
    isPerksPending.value = false
  }
}

const getAllPerksType = async (category: string) => {
  isPerksPending.value = true
  try {
    const {data: perks, error} = await supabase
        .from('perks')
        .select('*')
        .eq('type', category.toLowerCase())
    prks.value = perks
    isPerksPending.value = false
  } catch (e) {
    isPerksPending.value = false
  }
}

const getAllPerksSex = async (gender: string) => {
  isPerksPending.value = true
  try {
    const {data: perks, error} = await supabase
        .from('perks')
        .select('*')
        .eq('sex', gender.toLowerCase())
    prks.value = perks
    isPerksPending.value = false
  } catch (e) {
    isPerksPending.value = false
  }
}

onMounted(() => {
  getAllPerks()
})

const items = ['Shirts', "Hoodies,Pants & Shorts", "Accessories", "Jackets", "Bags"]

const items2 = ["Men", "Women"]

</script>

<style scoped>

</style>
