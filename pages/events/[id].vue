<template>
  <div class="w-full">
    <div v-if="!isPending" class="flex flex-col mt-10">

      <div class="flex flex-row">
        <div class="w-3/6 border border-gray-200 rounded-lg h-[520px]">
          <object :data="event.image_url" :style="{height:'500px', objectFit:'contain'}" class="w-full z-10 p-5"/>
        </div>
        <div class="px-5 w-3/6 flex flex-col space-y-4">
          <UBreadcrumb
              divider="/"
              :links="[{ label: 'Home', to: '/' }, { label: 'Events', to:'/events' }, { label: `${event.name}` }]"
          />
          <h3 class="my-5 text-4xl">{{ event.name }}</h3>
<!--          <h3 class="my-1 text-2xl">${{ perk.price }}</h3>-->
          <p>{{ event.description }}</p>
          <div class="w-2/3 mt-3">
            <UButton class="text-center px-5" size="xl">Buy Ticket</UButton>
          </div>
        </div>
      </div>

    </div>
    <Loader v-else/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main'
})

const route = useRoute()
const supabase = useSupabaseClient()
const id = route.params.id
const isPending = ref(true)
const event = ref({})


const getEventItem = async () => {
  const {data, error} = await supabase
      .from('events')
      .select()
      .eq('id', id)
  event.value = data[0]
}


onMounted(() => {
  isPending.value = true
  getEventItem().then(data => {
    isPending.value = false
  }).catch(error => {
    isPending.value = false
  })
})


</script>

<style scoped>

</style>
