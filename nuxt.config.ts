import 'dotenv/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/styles/main.css', '@fortawesome/fontawesome-free/css/all.min.css'],

    app: {
        baseURL: '/profissional/', // nome do repo
        buildAssetsDir: process.env.NUXT_LOCAL === 'true' ? '/_nuxt/' : '/',
    },

    nitro: {
        preset: 'github-pages',
    },
})
