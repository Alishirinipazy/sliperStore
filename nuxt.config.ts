// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://api.sliper.ir/api"
    }
  },
  build: {
    transpile: ["vue-toastification"]
  },
  css: ["~/assets/css/style.css"],
  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-swiper',
    "@nuxthub/core"
  ],
  extends: ['nuxt-emoji'],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }, 
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
      link: [{ rel: 'icon', type: '/fav.png', href: '/k' }],
    },
  }
})