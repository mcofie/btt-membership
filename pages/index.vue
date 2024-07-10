<template>
  <div>
    <div class="flex flex-row">
      <div
          class="bg-gradient-to-r from-cyan-500 to-blue-500 h-[400px] w-full items-center flex rounded-2xl justify-center">
        <div class="p-5 flex flex-col items-center justify-center align-middle">
          <img v-if="isDark" src="../public/imgs/logo.svg" class="w-48 rounded-2xl"/>
          <img v-if="!isDark" src="../public/imgs/logo_white.svg" class="w-48 rounded-2xl"/>

          <h2 class="text-5xl font-bold text-white dark:text-black">So glad you decided to join our fam.</h2>
          <p class="my-2 text-white dark:text-black">Your presence is super important to us.
            #1 Community of Black Technologists</p>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-row my-10 justify-between items-center">
      <div class="w-1/2">
        <img src="../public/imgs/black_guy.jpg" class="w-full rounded-2xl"/>
      </div>
      <p class="w-1/2 p-5 text-2xl leading-relaxed">
        Black Tech Talent aims to increase the representation of Black technologists in both corporate careers and
        entrepreneurship by curating a pipeline of job opportunities, education, community and culturally specific
        content.
      </p>
    </div>

    <div class="flex flex-row mb-10">
      <vue-vimeo-player
          player-width="1080"
          video-id="916393160"
          autoplay="true"
      />
    </div>

    <div
        class="w-full bg-gray-50 dark:text-white dark:border-gray-800 dark:bg-gray-900 py-5 rounded-lg border border-gray-300">
      <div class="text-center px-10 py-5">
        <h1 class="text-3xl">Give Us Some Feedback</h1>
        <p class="mb-5">What do you think?</p>
        <UDivider/>
      </div>

      <div class="flex flex-col w-3/5 my-5  justify-center mx-auto  rounded-lg p-5">
        <div class="flex-row space flex space-x-4 my-5">
          <UFormGroup label="First name" name="text" class="w-1/2">
            <UInput size="xl" v-model="feedback.firstName"/>
          </UFormGroup>

          <UFormGroup label="Last name" name="password" class="w-1/2">
            <UInput size="xl" v-model="feedback.lastName" type="text"/>
          </UFormGroup>
        </div>

        <div class="flex-row space flex space-x-4">
          <UFormGroup label="Email" name="email" class="w-1/2">
            <UInput v-model="feedback.email" size="xl"/>
          </UFormGroup>

          <UFormGroup label="Phone" name="password" class="w-1/2">
            <UInput v-model="feedback.phoneNumber" type="text" size="xl"/>
          </UFormGroup>
        </div>
        <div class="my-2 w-full">
          <p class="my-1 text-sm">Message</p>
          <UTextarea class="w-full min-h-12" placeholder="Tell us what you think"/>
        </div>

        <div class="my-2">
          <UButton
              @click="sendFeedback()"
              :loading="sendingFeedback"
              block
              size="md"
              color="primary"
              variant="solid"
              label="Submit Feedback"
              :trailing="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {vueVimeoPlayer} from 'vue-vimeo-player'

definePageMeta({
  layout: 'main'
})

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
// const supabase = useSupabaseClient()
const toast = useToast()
const sendingFeedback = ref(false)
const feedback = ref({} as IFeedback)

// const sendFeedback = async () => {
//   sendingFeedback.value = true
//   try {
//     const {data, error} = await supabase
//         .from('feedback')
//         .insert([
//           {
//             firstname: feedback.value.firstName,
//             lastname: feedback.value.lastName,
//             phone: feedback.value.phoneNumber,
//             email: feedback.value.email,
//             message: feedback.value.message
//           },
//         ])
//         .select()
//     sendingFeedback.value = false
//     toast.add({title: 'Feedback successfully sent'})
//     feedback.value = ({} as IFeedback)
//   } catch (e) {
//     sendingFeedback.value = false
//   }
// }

interface IFeedback {
  firstName: string
  lastName: string,
  email: string,
  phoneNumber: string
  message: string
}

</script>

<style scoped>

</style>
