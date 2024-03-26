<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-orange-200 h-[400px] w-full rounded-lg">

      </div>
    </div>

    <div>
      <p class="p-5 text-2xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore
        magna aliqua. Massa vitae tortor condimentum lacinia quis vel. Mi sit amet mauris commodo quis imperdiet. In est
        ante in nibh mauris cursus. Enim ut tellus elementum sagittis.</p>
    </div>

    <div class="grid grid-cols-4 gap-4 mt-7">
      <UCard class="w-full h-[100px]" v-for="i in 7">

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

definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>
