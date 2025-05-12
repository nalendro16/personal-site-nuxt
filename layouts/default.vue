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
      <ul
        class="text-2xl md:text-4xl gap-2 font-bold hidden md:flex text-white"
      >
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

      <Icon name="meteor-icons:list" size="40px" class="mr-4 md:hidden" />
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>
