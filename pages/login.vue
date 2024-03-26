<template>
  <div>
    <button @click="signInWithOtp">
      Sign In with E-Mail
    </button>
    <input
        v-model="email"
        type="email"
    />

    <input
        v-model="password"
        type="text"
    />
  </div>
</template>

<script lang="ts" setup>


const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const signInWithOtp = async () => {

  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}
</script>

<style scoped>

</style>
