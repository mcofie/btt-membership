<template>
  <div class="w-full">
    <div v-if="!perksResponse.pending && perksResponse.status === 'success'" class="flex flex-col mt-10">

      <div class="flex flex-row">
        <div class="w-3/6 border border-gray-200 dark:border-gray-800 rounded-lg h-[520px]">
          <object :data="perk.imageUrl" :style="{height:'500px', objectFit:'contain'}" class="w-full z-10 p-5"/>
        </div>
        <div class="px-5 w-3/6 flex flex-col space-y-4">
          <UBreadcrumb
              divider="/"
              :links="[{ label: 'Home', to: '/' }, { label: 'Perks', to:'/perks' }, { label: `${perk.productName}` }]"
          />
          <h3 class="my-5 text-4xl">{{ perk.productName }}</h3>
          <h3 class="my-1 text-2xl">${{ perk.price }}</h3>
          <p>{{ perk.details }}</p>
          <div class="w-2/3 mt-3">
            <a :href="perk.paymentLink" target="_blank">
              <UButton class="text-center px-5" size="xl">Buy now</UButton>
            </a>
          </div>
        </div>
      </div>

      <div
          class="mt-5 bg-gradient-to-r from-purple-500 to-pink-500 h-[400px] w-full flex items-center rounded-2xl justify-center">
        <div class="p-5 flex flex-col items-center justify-center align-middle">
          <h2 class="text-5xl font-bold text-white">Save 15% On all Hoodies</h2>
          <p class="my-2 text-white">Use code <span class="font-bold underline decoration-wavy">‘Hoodie15’</span> at
            Checkout</p>
        </div>
      </div>


    </div>
    <Loader v-else/>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const isPending = ref(true)
const perk = ref({})
const id = route.params.id

definePageMeta({
  layout: 'main'
})

const perksResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

const perksResources = async () => {
  perksResponse.value = await useFetch(`/api/v1/perk/${id}`, {
    baseURL: 'https://api-membership.blacktechtalent.org'
  })

  perk.value = perksResponse.value.data.data
}


onMounted(() => {
  perksResources()
})


</script>

<style scoped>

</style>
