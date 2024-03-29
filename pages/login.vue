<template>
  <div class="grid grid-cols-3 justify-center items-center">
    <div
        class="space-y-5 p-5 w-full flex flex-col text-center mt-20 items-center justify-center h-[400px] bg-white rounded-lg border border-gray-300 col-start-2">

      <img src="../public/imgs/btt-logo.svg" class="w-10 h-10 text-center"/>
      <h2 class="text-4xl font-bold">Welcome to BTT <br/>Membership</h2>
      <UButton color="primary" variant="outline" @click="signInWithGoogle()" class="px-4">
        <UIcon name="logos:google-icon" class="text-2xl" dynamic/>
        Sign In with Google
      </UButton>
      <UDivider label="OR"/>
      <div class="flex flex-row space-x-2">
        <UButton color="black" class="px-4">
          <UIcon name="i-mdi-apple" class="text-2xl" dynamic/>
          Continue with Apple
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


const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const signInWithGoogle = async () => {

  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

async function signInWithLinkedIn() {
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'linkedin_oidc',
  })
}

</script>

<style scoped>

</style>
