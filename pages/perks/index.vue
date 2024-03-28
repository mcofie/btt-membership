<template>
  <div>
    <div class="flex flex-row">
      <div
          class="bg-gradient-to-r from-purple-500 to-pink-500 h-[400px] w-full flex items-center rounded-2xl justify-center">
        <div class="p-5 flex flex-col items-center justify-center align-middle">
          <h2 class="text-5xl font-bold text-white">Save 15% On all Hoodies</h2>
          <p class="my-2 text-white">Use code <span class="font-bold">‘Hoodie15’</span> at Checkout</p>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="w-2/4 flex flex-row my-5 space-x-3">
        <UDropdown :items="items2" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Men" trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </UDropdown>

        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Hoodies" trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </UDropdown>
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

definePageMeta({
  layout: 'main'
})

const getAllPerks = async () => {
  let {data: perks, error} = await supabase
      .from('perks')
      .select('*')
  prks.value = perks
}

onMounted(() => {
  isPerksPending.value = true
  getAllPerks().then(data => {
    isPerksPending.value = false
  }).catch(error => {
    isPerksPending.value = false
  })
})

const items = [
  [{
    label: 'Shirts',
    click: () => {
      console.log("hhhhh")
    }
  }], [{
    label: 'Hoodies',
  }, {
    label: 'Pants & Shorts',
  }], [{
    label: 'Accessories',
  }, {
    label: 'Jackets',
  }], [{
    label: 'Bags',
  }]
]

const items2 = [
  [{
    label: 'Men',
  }], [{
    label: 'Women',
  }]
]

</script>

<style scoped>

</style>
