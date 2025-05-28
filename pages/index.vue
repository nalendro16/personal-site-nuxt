<script setup lang="ts">
const { data, status } = useFetch('/api/project/list')
console.log(data.value, status.value)
</script>

<template>
  <section class="mx-4 md:mx-16 my-8">
    <UCard class="rounded-lg outline-2 md:mx-16">
      <h1 class="text-6xl font-bold">Nalendro Agung Wicaksono</h1>
      <p class="mt-2 text-xl font-semibold">
        I'm a Front-end developer which work with typescript, React, and Vue
        environtment. I love to integrating functionality and design in
        applications to create intuitive, user-friendly experiences
      </p>
    </UCard>
  </section>

  <UContainer as="article" class="mt-8 md:mt-16">
    <!-- <h1 class="text-4xl font-semibold">Projects</h1>
    <p class="mb-4 text-2xl">Here's some project i've been built so far</p>
    <div
      class="flex flex-col md:flex-row md:gap-4 gap-8 md:mx-auto justify-center"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div> -->
  </UContainer>

  <UContainer as="article" class="mt-8 md:mt-16">
    <!-- <h1 class="text-4xl font-semibold">Thoughts</h1>
    <p class="mb-4 text-2xl">
      Sometimes i wrote what's on my mind, or maybe just note to myself
    </p>
    <BlogCard class="mb-8" />
    <BlogCard /> -->
  </UContainer>
</template>
