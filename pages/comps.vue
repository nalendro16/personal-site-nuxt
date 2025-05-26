<template>
  <div class="my-8">
    <UButton label="Test" size="xl" class="px-8 py-3" color="warning" />
    <UButton
      label="Test"
      size="lg"
      class="px-8 outline-black outline-4 text-black"
      variant="outline"
    />

    <UCard class="mt-4">
      <template #header>
        <Placeholder class="h-8" />
      </template>
      <Placeholder class="h-32" />
    </UCard>
  </div>
</template>
