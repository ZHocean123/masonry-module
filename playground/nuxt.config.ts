import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: ['../src/module'],
  masonry: {},
  devtools: { enabled: true },
  compatibilityDate: '2024-09-09',
})
