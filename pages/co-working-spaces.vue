<template>
  <div>
    <div class="flex flex-row">
      <div
          class="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[400px] w-full rounded-2xl items-center flex justify-center">
        <div class="p-5 flex flex-col items-center justify-center align-middle">
          <h2 class="text-5xl font-bold text-white">Collaborative Environment</h2>
        </div>
      </div>
    </div>

    <div>
      <p class="p-5 text-lg text-center w-2/3 text-center mx-auto">Exclusive access to state-of-the-art co-working space
        located at our
        headquarters. Vibrant and collabo- rative environment to connect with other members, work on projects, and
        access resources.</p>
    </div>

    <div class="grid grid-cols-3 justify-items-center gap-4 mt-7">
      <UCard class="w-full text-center" v-for="i in amenities">
        <UIcon :name="i.icon" class="text-4xl my-2" dynamic/>
        <p>{{ i.name }}</p>
      </UCard>
    </div>

    <UDivider class="mt-10" label="Booking" type="dashed"
              :ui="{ label: 'text-2xl text-primary-500 dark:text-primary-400' }"/>


    <div class="flex flex-col w-3/5 my-10 border justify-center mx-auto border-gray-300 rounded-lg p-5">
      <div class="flex-row space flex space-x-4 my-5">
        <UFormGroup label="First name" name="text" class="w-1/2">
          <UInput size="xl" v-model="booking.firstName"/>
        </UFormGroup>

        <UFormGroup label="Last name" name="password" class="w-1/2">
          <UInput size="xl" v-model="booking.lastName" type="text"/>
        </UFormGroup>
      </div>

      <div class="flex-row space flex space-x-4">
        <UFormGroup label="Email" name="email" class="w-1/2">
          <UInput v-model="booking.email" size="xl"/>
        </UFormGroup>

        <UFormGroup label="Phone" name="password" class="w-1/2">
          <UInput v-model="booking.phone" type="text" size="xl"/>
        </UFormGroup>
      </div>
      <div class="my-2 w-full">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')"/>

          <template #panel="{ close }">
            <DatePicker v-model="date" is-required @close="close"/>
          </template>
        </UPopover>
      </div>

      <div class="my-2">
        <UButton
            :loading="sendingBookings"
            @click="makeBooking()"
            block
            size="md"
            color="primary"
            variant="solid"
            label="Book space"
            :trailing="false"
        />
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {DatePicker} from "v-calendar";
import {format} from "date-fns";
const sendingBookings = ref(false)
const toast = useToast()


const supabase = useSupabaseClient()

const date = ref(new Date())
const booking = ref({} as IBooking)

const amenities = [
  {
    name: 'Dedicated Workstations',
    icon: "i-icon-park-server"
  },
  {
    name: 'High-speed Wi-fi',
    icon: 'i-icon-park-connection-point-two'
  },
  {
    name: 'Meeting Rooms And Conference Facilities',
    icon: 'i-icon-park-building-four'
  },
  {
    name: 'Printing, Scanning, And Copying Services',
    icon: 'i-icon-park-printer'
  },
  {
    name: 'Refreshments And Snacks',
    icon: 'i-icon-park-drink'
  },
  {
    name: 'Networking Events And Workshops',
    icon: 'i-icon-park-calendar'
  },
  {
    name: 'Access To A Community Of Innovators And Entrepreneurs',
    icon: 'i-icon-park-user-business'
  },
];

const makeBooking = async () => {
  sendingBookings.value = true
  try{
    const {data, error} = await supabase
        .from('booking')
        .insert([
          {
            firstname: booking.value.firstName,
            lastname: booking.value.lastName,
            phone: booking.value.phone,
            email: booking.value.email,
            date: date.value
          },
        ])
        .select()
    sendingBookings.value = false
    toast.add({title:'Booking successfully added'})
    booking.value = ({} as IBooking)
  }catch (e) {
    sendingBookings.value = false
  }


}

interface IBooking {
  firstName: string
  lastName: string,
  email: string,
  phone: string
  date: string
}

definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>
