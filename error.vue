<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <UContainer class="h-screen text-center mt-48">
    <h1>{{ error?.statusCode }}</h1>
    <p class="text-sm mb-4">Keep patience bro, I'm still working on it</p>
    <NuxtLink to="/"> <UButton>Go Back Home</UButton> </NuxtLink>
  </UContainer>
</template>
