<template>
  <NuxtLayout>
    <NuxtPage/>
    <UNotifications/>
  </NuxtLayout>
  <NuxtSnackbar />
</template>
<style scoped>
div {
  font-family: Exo, sans-serif;
}
</style>
<!--<script src="https://player.vimeo.com/api/player.js"></script>-->

<script lang="ts" setup>

useHead({
  title: 'Black Tech Talent Membership',
  meta: [
    {name: 'description', content: 'Black Tech Talent Membership'}
  ]
})
</script>
