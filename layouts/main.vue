<template>
  <div>
    <div class="flex flex-row">
      <div
          class="w-4/6 border border-gray-200 dark:border-gray-800 dark:bg-gray-900 bg-white h-[60px] mx-auto rounded-lg my-4 flex flex-row justify-between items-center p-5">
        <div class="flex flex-col">
          <NuxtLink to="/" class="flex flex-row items-center justify-center">
            <img v-if="isDark" src="../public/imgs/btt-logo-dark.svg" class="w-12 h-12 mr-"/>
            <img v-if="!isDark" src="../public/imgs/btt-logo-light.svg" class="w-12 h-12 mr-"/>
            <Icon name="ic:sharp-minus" class="dark:text-white text-gray-900" dynamic/>
            <p class="text-sm mx-1">Members Only</p>
          </NuxtLink>
        </div>

        <div class="flex flex-row space-x-6 items-center">
          <NuxtLink to="/events" active-class="text-blue-600 font-bold">Events</NuxtLink>
          <NuxtLink to="/resources" active-class="text-blue-600 font-bold">Resources</NuxtLink>
          <NuxtLink to="/perks" active-class="text-blue-600 font-bold">Perks</NuxtLink>
          <NuxtLink to="/co-working-spaces" active-class="text-blue-600 font-bold">Co Working Space</NuxtLink>
          <NuxtLink to="/">
            <UDropdown v-if="!isUserLoading" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                       :popper="{ placement: 'bottom-start' }">
              <UAvatar :src="avatarUrl"/>

              <template #account="{ item }">
                <div class="text-left">
                  <p>
                    Signed in as
                  </p>
                  <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ email }}
                  </p>
                </div>
              </template>

              <template #item="{ item }" @click="signOut()">
                <span class="truncate">{{ item.label }}</span>

                <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"/>
              </template>
            </UDropdown>
          </NuxtLink>
          <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
          />
        </div>
      </div>
    </div>

    <div class="w-4/6 mx-auto min-h-lvh	">
      <slot/>
    </div>

    <div class="flex flex-row w-4/6 mx-auto mt-10 mb-2">
      <div
          class="border-gray-300 bg-gray-50 dark:text-white dark:border-gray-800 dark:bg-gray-900 border text-gray-500 text-sm p-5 w-full rounded-lg flex flex-row justify-between items-center">
        <div>
          <p>Black Tech Talent Membership</p>
          <small> &copy; 2024 </small>
          <small class="text-red-400 cursor-pointer underline" @click="signOut()">(Logout)</small>
        </div>

        <div class="flex flex-row space-x-4 w-1/2 justify-center mx-auto">
          <a href="https://www.facebook.com/blacktechtalent" class="hover:text-blue-600">
            <UIcon name="i-fa6-brands-facebook" dynamic class="text-xl"/>
          </a>
          <a href="https://instagram.com/blacktechtalent?igshid=YmMyMTA2M2Y=" class="hover:text-blue-600">
            <UIcon name="i-fa6-brands-instagram" dynamic class="text-xl"/>
          </a>
          <a href="https://twitter.com/blacktechtalent?s=11&t=xfk6COnM0ZUl9NLfgfuQag" class="hover:text-blue-600">
            <UIcon name="i-fa6-brands-twitter" dynamic class="text-xl"/>
          </a>
          <a href="https://www.linkedin.com/company/black-tech-talent/" class="hover:text-blue-600">
            <UIcon name="i-fa6-brands-linkedin" dynamic class="text-xl"/>
          </a>
        </div>

        <div>
          <p>info@blacktechtalent.org</p>
          <p>+1 93 0393 908 84</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const supabase = useSupabaseClient()
const userDetails = ref({})
const isUserLoading = ref(true)
// const {data} = await supabase.auth.getSession()
const avatarUrl = ref('')
const email = ref('')

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})


onMounted(async () => {
  await getUser()

})

const getUser = async () => {
  // console.log((await supabase.auth.getUser()).data.user)
  //
  // avatarUrl.value = (await supabase.auth.getUser()).data.user?.user_metadata?.avatar_url
  // email.value = (await supabase.auth.getUser()).data.user?.email
  //
  // isUserLoading.value = true
  // const {data: {user}} = await supabase.auth.getUser().then(data => {
  //   userDetails.value = user
  //   isUserLoading.value = false
  //
  //   console.log(user)
  //
  // }).catch(error => {
  //   isUserLoading.value = false
  // })

}
const {data, signIn, signOut, getSession, status} = useAuth()


const items = [
  [{
    label: email.value,
    slot: 'account',
    disabled: true
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]

</script>

<style scoped>

</style>
