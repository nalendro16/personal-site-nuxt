<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    icon: 'i-lucide-user',
    to: '/',
  },
  {
    label: 'Thoughts',
    icon: 'i-lucide-credit-card',
    to: '/thoughts',
  },
  {
    label: 'Project',
    icon: 'i-lucide-cog',
    to: '/project',
  },
])
</script>

<template>
  <div>
    <nav
      class="border-b-4 border-black w-full md:px-16 py-4 flex justify-between items-center"
    >
      <img
        src="/logo_n_nobg.png"
        alt="Nalendro logo"
        class="max-h-16 max-w-16"
      />
      <ul class="text-2xl md:text-4xl gap-2 font-bold hidden md:flex">
        <li>
          <NuxtLink
            to="/thoughts"
            class="hover:text-gray-500 px-4 py-2 border-4 border-black"
            >Thoughts</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/project"
            class="hover:text-gray-500 px-4 py-2 border-4 border-black"
            >Project</NuxtLink
          >
        </li>
      </ul>

      <UDropdownMenu
        :items="items"
        :ui="{
          content: 'w-48',
        }"
      >
        <Icon name="meteor-icons:list" size="40px" class="mr-4 md:hidden" />
        <!-- <UButton icon="i-lucide-menu" color="neutral" variant="outline" /> -->
      </UDropdownMenu>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
