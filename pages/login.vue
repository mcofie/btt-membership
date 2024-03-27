<template>
  <div class="grid grid-cols-4 justify-center">
    <div class="w-full flex justify-center h-[100px] bg-gray-300">
      <button @click="signInWithOtp">
        Sign In with Google
        <UIcon name="i-mdi-aws"/>

      </button>
    </div>
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
