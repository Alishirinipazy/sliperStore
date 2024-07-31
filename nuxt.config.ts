// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api"
    }
  },
  build: {
    transpile: ["vue-toastification"]
  },
  css: ["~/assets/css/style.css"],
  modules: ['@formkit/nuxt','@pinia/nuxt','@pinia-plugin-persistedstate/nuxt','nuxt-swiper'],
  
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