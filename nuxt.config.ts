// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nalendro Agung W',
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
})
