<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <UContainer>
    <h1>{{ error?.statusCode }}</h1>
    <NuxtLink to="/"> <UButton>Go Back Home</UButton> </NuxtLink>
  </UContainer>
</template>
