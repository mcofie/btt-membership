<template>
  <div>
    <div class="flex flex-row">
      <div
          class="w-4/6 border border-gray-200 bg-white h-[60px] mx-auto rounded-lg my-4 flex flex-row justify-between items-center p-5">
        <div>
          <NuxtLink to="/">
            <h3 class="font-bold">BTT Membership</h3>
          </NuxtLink>
        </div>

        <div class="flex flex-row space-x-6 items-center">
          <NuxtLink to="/events" active-class="text-blue-400">Events</NuxtLink>
          <NuxtLink to="/resources" active-class="text-blue-400">Resources</NuxtLink>
          <NuxtLink to="/perks" active-class="text-blue-400">Perks</NuxtLink>
          <NuxtLink to="/co-working-spaces" active-class="text-blue-400">Co Working Space</NuxtLink>
          <NuxtLink to="/">
            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                       :popper="{ placement: 'bottom-start' }">
              <UAvatar :src="data.user"/>

              <template #account="{ item }">
                <div class="text-left">
                  <p>
                    Signed in as
                  </p>
                  <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ item.label }}
                  </p>
                </div>
              </template>

              <template #item="{ item }">
                <span class="truncate">{{ item.label }}</span>

                <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"/>
              </template>
            </UDropdown>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="w-4/6 mx-auto min-h-lvh	">
      <slot/>
    </div>

    <div class="flex flex-row w-4/6 mx-auto mt-5">
      <div class="border-gray-200 border h-[100px] w-full rounded-lg">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()

const {data} = await supabase.auth.getSession()
// data.user?.email
// data.user?.iden

const items = [
  [{
    label: 'ben@example.com',
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
