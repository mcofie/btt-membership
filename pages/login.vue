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
  // const {data,error} = await supabase.auth.signUp({
  //   email: email.value,
  //   password: password.value
  // })
  // if (error) console.log(error)
  // console.log(data)

  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })


  // console.log(data)
  // console.log(error)

}
</script>

<style scoped>

</style>
