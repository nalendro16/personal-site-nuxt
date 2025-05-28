<script setup lang="ts"></script>

<template>
  <div>
    <nav
      class="border-b-4 border-black w-full md:px-16 flex justify-between items-center -mt-8 py-4"
    >
      <NuxtLink to="/">
        <img
          src="../assets/img/logo_n_nobg.png"
          alt="Nalendro logo"
          class="max-h-16 max-w-16"
        />
      </NuxtLink>

      <div class="text-2xl md:text-4xl gap-6 font-bold hidden md:flex">
        <UButton
          label="Test"
          size="lg"
          class="text-base text-black font-bold"
          variant="link"
          color="neutral"
        >
          <NuxtLink to="/thoughts">Thoughts</NuxtLink>
        </UButton>
        <UButton
          label="Test"
          size="lg"
          class="text-base text-black font-bold"
          variant="link"
          color="neutral"
        >
          <NuxtLink to="/project">Project</NuxtLink>
        </UButton>
      </div>
    </nav>

    <main>
      <slot />
    </main>
  </div>
</template>
