<template>
  <div class="w-full">
    <div class="w-2/4 flex flex-row my-2 space-x-3">
      <USelect
          color="gray"
          variant="outline"
          size="md"
          :options="['United States', 'Canada', 'Mexico']"
      />

      <USelect
          color="gray"
          variant="outline"
          size="md"
          :options="['United States', 'Canada', 'Mexico']"
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
