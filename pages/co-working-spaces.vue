<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-orange-200 h-[400px] w-full rounded-2xl">

      </div>
    </div>

    <div>
      <p class="p-5 text-2xl text-center">Exclusive access to state-of-the-art co-working space located at our
        headquarters. Vibrant and collabo- rative environment to connect with other members, work on projects, and
        access resources.</p>
    </div>

    <div class="grid grid-cols-4 gap-4 mt-7">
      <UCard class="w-full text-center" v-for="i in amenities">
        <UIcon :name="i.icon"/>
        <p>{{ i.name }}</p>
      </UCard>
    </div>

    <div class="flex flex-col w-full">
      <div class="flex-row space flex space-x-4 my-5">
        <UFormGroup label="Email" name="email" class="w-1/2">
          <UInput size="xl" v-model="email"/>
        </UFormGroup>

        <UFormGroup label="Password" name="password" class="w-1/2">
          <UInput size="xl" v-model="password" type="password"/>
        </UFormGroup>
      </div>

      <div class="flex-row space flex space-x-4">
        <UFormGroup label="Email" name="email" class="w-1/2">
          <UInput v-model="email" size="xl"/>
        </UFormGroup>

        <UFormGroup label="Password" name="password" class="w-1/2">
          <UInput v-model="password" type="password" size="xl"/>
        </UFormGroup>
      </div>

      <!--      <UButton type="submit">-->
      <!--        Submit-->
      <!--      </UButton>-->
    </div>

  </div>
</template>

<script lang="ts" setup>
import {DatePicker} from "v-calendar";
import {format} from "date-fns";

const date = ref(new Date())
const email = ref('')
const password = ref('')

const amenities = [
  {
    name: 'Dedicated Workstations',
    icon: 'i-heroicons-light-bulb'
  },
  {
    name: 'High-speed Wi-fi',
    icon: 'heroicons:user-circle-20-solid'
  },
  {
    name: 'Meeting Rooms And Conference Facilities',
    icon: ''
  },
  {
    name: 'Printing, Scanning, And Copying Services',
    icon: ''
  },
  {
    name: 'Refreshments And Snacks',
    icon: ''
  },
  {
    name: 'Networking Events And Workshops',
    icon: ''
  },
  {
    name: 'Access To A Community Of Innovators And Entrepreneurs',
    icon: ''
  },
];

definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>
