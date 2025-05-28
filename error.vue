<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <UContainer class="flex flex-col items-center justify-center h-screen">
    <h1 class="mb-4 text-4xl font-semibold">
      {{ error?.statusCode }}
    </h1>
    <h1 class="mb-4 text-xl font-semibold">
      {{ error?.message }}
    </h1>
    <NuxtLink to="/">
      <UButton
        label="Test"
        size="lg"
        class="px-8 outline-black outline-4 text-black"
        variant="outline"
        >Go Back Home</UButton
      >
    </NuxtLink>
  </UContainer>
</template>
