<template>
  <div class="w-full">
    <div class="w-2/4 flex flex-row my-2 items-center space-x-4">
      <USelectMenu class="w-1/3"
                   color="gray"
                   v-model="year"
                   size="md"
                   :options="['2023', '2024', '2025']">
        <template #option="{ option: year }" @click="selectRowsByYear(year)">
          <span class="truncate">{{ year }}</span>
        </template>
      </USelectMenu>

      <USelectMenu
          color="gray"
          size="md"
          class="w-1/3"
          v-model="month"
          :options="monthInYears"
      />
    </div>

    <div class="grid grid-cols-2 gap-4 mt-7" v-if="!isPending">
      <NuxtLink :to="`/events/${event.id}`" v-if="evnts.length !== 0" v-for="event in evnts">
        <UCard class="w-full flex flex-col space-y-5">
          <h1 class="text-4xl font-bold text-blue-600">{{ $dayjs(event.date_time).format('DD MMM') }}</h1>
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
      </NuxtLink>
      <div class="col-span-2 text-center justify-center py-5" v-else>
        <UIcon name="icon-park-twotone:winking-face" class="text-5xl" dynamic/>
        <p>Nothing found</p>
      </div>
    </div>
    <Loader v-else/>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const evnts = ref([])
const isPending = ref(true)
const monthInYears = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = ref('2024')
const month = ref('March')


watch(year, async (newYear: string, oldYear: string) => {
  await selectRowsByYear(newYear, month.value)
})

watch(month, async (newMonth: string, oldMonth: string) => {
  await selectRowsByYear(year.value, newMonth)
})


const getAllEvents = async () => {
  let {data: events, error} = await supabase
      .from('events')
      .select('*')
  evnts.value = events
}

async function selectRowsByYear(year: string, month: string) {

  const targetMonth = monthInYears.indexOf(month)

  const targetYear = parseInt(year); // Change this to your desired year
  const yearStart = new Date(targetYear, targetMonth, 1).toISOString(); // First day of the year
  const yearEnd = new Date(targetYear, 11, 31, 23, 59, 59, 999).toISOString();
  isPending.value = true

  try {
    const {data: events, error} = await supabase
        .from('events')
        .select('*')
        .gte('date_time', yearStart) // Greater than or equal to the start of the year
        .lte('date_time', yearEnd);
    evnts.value = events
    isPending.value = false
  } catch (error) {
    isPending.value = false
    console.error('Error fetching rows:', error.message);
  }
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
