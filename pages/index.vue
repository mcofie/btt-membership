<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-yellow-200 h-[400px] w-full items-center flex rounded-2xl justify-center">
        <div class="p-5 flex flex-col items-center justify-center align-middle">
          <h2 class="text-5xl font-bold">So glad you decided to join our fam.</h2>
          <p class="my-2">Your presence is super important to us.
            #1 Community of Black Technologists</p>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-row my-10 justify-between items-center">
      <div class="w-1/2">
          <img src="../public/imgs/black_guy.jpg" class="h-[350px] w-full rounded-2xl"/>
      </div>
      <p class="w-1/2 p-5 text-2xl leading-relaxed">
        Black Tech Talent aims to increase the representation of Black technologists in both corporate careers and
        entrepreneurship by curating a pipeline of job opportunities, education, community and culturally specific
        content.
      </p>
    </div>

    <div class="flex flex-row mb-10">
      <div class="bg-gray-200 w-full rounded-lg">
        <iframe class="w-full h-[400px] aspect-video md:aspect-square"
                src="https://www.youtube.com/embed/NQ1ringLWQs"></iframe>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main'
})

</script>

<style scoped>

</style>
