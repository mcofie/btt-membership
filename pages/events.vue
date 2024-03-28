<template>
  <div class="w-full">
    <div class="w-2/4 flex flex-row my-2 items-center space-x-4">
      <USelectMenu class="w-1/3"
                   color="gray"
                   v-model="year"
                   size="md"
                   :options="['2023', '2024', '2025']"/>

      <USelectMenu
          color="gray"
          size="md"
          class="w-1/3"
          v-model="month"
          :options="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
      />
    </div>

    <div class="grid grid-cols-2 gap-4 mt-7" v-if="!isPending">
      <UCard class="w-full flex flex-col space-y-5" v-for="event in evnts">
        <h1 class="text-4xl font-bold">{{ $dayjs(event.date_time).format('DD MMM') }}</h1>
        <p class="text-lg font-medium my-2">{{ event.name }}</p>
        <p class="text-md text-gray-500 mb-2">{{ event.description }}</p>
        <div class="flex flex-row justify-start items-center mb-4">
          <UIcon name="heroicons:map-pin-20-solid" class="text-2xl text-gray-500" dynamic/>
          <p class="text-gray-500">{{ event.venue }}</p>
        </div>
        <div class="flex flex-row justify-start items-center space-x-2">
          <UIcon name="heroicons:clock-solid" class="text-2xl text-gray-500" dynamic/>
          <p class="text-gray-500">{{ $dayjs(event.date_time).format('HH:mm') }}</p>
        </div>
      </UCard>
    </div>
    <Loader v-else/>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const evnts = ref([])
const isPending = ref(true)
const year = ref('2024')
const month = ref('March')

// import { useDayjs } from '#dayjs' // not need if you are using auto import
// const dayjs = useDayjs()
// dayjs.locale('fr')
// dayjs.extend(...)


const getAllEvents = async () => {
  let {data: events, error} = await supabase
      .from('events')
      .select('*')
  evnts.value = events
}

onMounted(() => {
  isPending.value = true
  getAllEvents().then(data => {
    isPending.value = false
  }).catch(error => {
    isPending.value = false
  })
})

definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>
