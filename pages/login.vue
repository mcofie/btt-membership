<template>
  <div class="grid grid-cols-3 justify-center">
    <div
        class="space-y-5 p-10 w-full flex flex-col text-center mt-20 items-center justify-center dark:bg-gray-900 dark:border-gray-900 bg-white rounded-lg border border-gray-300 col-start-2">

      <img v-if="!isDark" src="../public/imgs/logo.svg" class="w-36 text-center"/>
      <img v-if="isDark" src="../public/imgs/logo_white.svg" class="w-36 text-center"/>

      <h2 class="text-2xl font-bold dark:text-white text-black w-full">Welcome to BTT <br/>Membership</h2>

      <div class="flex-col flex space-y-2 w-3/4 my-5">
        <UFormGroup label="Email" name="text">
          <UInput size="xl" v-model="login.email"/>
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput size="xl" v-model="login.password" type="password"/>
        </UFormGroup>

        <UFormGroup label="Re-enter Password" name="password">
          <UInput size="xl" v-model="login.passwordTwo" type="password"/>
        </UFormGroup>

        <div class="my-2">
          <UButton
              block
              size="md"
              color="primary"
              variant="solid"
              label="Sign Up"
              :trailing="false"
              @click="mySignInHandler({email:login.email, password:login.password})"
          />
        </div>

        <p>Have an account already?<span class="text-blue-500"> Login</span></p>
      </div>


      <div class="flex flex-row space-x-2 hidden">
        <UButton color="primary" variant="outline" @click="signInWithGoogle()" class="px-4">
          <UIcon name="logos:google-icon" class="text-2xl" dynamic/>
          Sign In with Google
        </UButton>
        <UButton color="primary" variant="outline" class="px-4" @click="signInWithLinkedIn()">
          <UIcon name="logos:linkedin-icon" class="text-2xl" dynamic/>
          Continue with LinkedIn
        </UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {signIn} from "next-auth/react";

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const login = ref({} as ILogin)

interface ILogin {
  email: string,
  password: string,
  passwordTwo: string
}

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

// definePageMeta({
//   auth: {
//     unauthenticatedOnly: true,
//   }
// })

const mySignInHandler = async ({email, password}: { email: string, password: string }) => {
  const {error, url} = await signIn('credentials', {email, password, redirect: false})
  if (error) {
    // Do your custom error handling here
    // snackbar.add({
    //   type: 'error',
    //   text: 'Sorry! Authentication failed'
    // })
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    return navigateTo(url, {external: true})
  }
}

</script>

<style scoped>

</style>
