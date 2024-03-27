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

    <div class="grid grid-cols-4 gap-4 mt-7" v-if="!isPending">
      <UCard class="w-full h-[220px]" v-for="event in evnts">
        <p class="text-lg font-medium">{{ event.name }}</p>
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
