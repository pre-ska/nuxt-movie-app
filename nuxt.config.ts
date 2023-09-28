// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-windicss"],
  runtimeConfig: {
    apiKey: process.env.NUXT_TMDB_API_KEY,
    apiBaseUrl: "",
  },
});
