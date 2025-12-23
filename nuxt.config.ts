// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Cormorant+Garamond': [400, 500, 600, 700],
      'Josefin+Sans': [300, 400, 500, 600, 700]
    }
  }
})
