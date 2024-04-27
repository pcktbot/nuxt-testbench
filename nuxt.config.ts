// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "~/assets/index.scss" as *;'
        }
      }
    }
  },
  googleFonts: {
    families: {
      'Bricolage Grotesque': true
    }
  }
})
