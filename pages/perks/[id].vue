<template>
  <div class="w-full">
    <div v-if="!isPending" class="flex flex-row mt-3">
      <div class="w-3/6 bg-gray-50 border border-gray-300 rounded-lg h-[520px]"></div>
      <div class="px-5 w-3/6 flex flex-col space-y-4">
        <UBreadcrumb
            divider="/"
            :links="[{ label: 'Home', to: '/' }, { label: 'Perks', to:'/perks' }, { label: `${perk.product_name}` }]"
        />
        <h3 class="my-5 text-4xl">{{ perk.product_name }}</h3>
        <p>{{ perk.details }}</p>
        <UButton class="w-1/2 text-center mt-2" size="xl">Buy now</UButton>
      </div>
    </div>
    <Loader v-else/>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const supabase = useSupabaseClient()
const isPending = ref(true)
const perk = ref({})
const id = route.params.id

definePageMeta({
  layout: 'main'
})

const getPerkItem = async () => {

  const {data, error} = await supabase
      .from('perks')
      .select()
      .eq('id', id)
  perk.value = data[0]
}

onMounted(() => {
  isPending.value = true
  getPerkItem().then(data => {
    isPending.value = false
  }).catch(error => {
    isPending.value = false
  })
})


</script>

<style scoped>

</style>
