// filepath: d:\Projects\NUXT\profissional\nuxt.config.ts
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/styles/main.css', '@fortawesome/fontawesome-free/css/all.min.css'],

    app: {
        baseURL: '/profissional/', // troque pelo nome do seu repositório
    },
})
