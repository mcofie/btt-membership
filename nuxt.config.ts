// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
    supabase: {
        // Options
        // Remove or comment out the auth configuration
        auth: {
          // Auth configuration options
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
