// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/supabase', "@nuxt/fonts",'dayjs-nuxt'],
    dayjs: {
        locales: ['en'],
        defaultLocale: 'en',
        plugins: ['relativeTime', 'advancedFormat'],
    },
    fonts: {
        providers: {
            google: true,
        },
        priority: ['google'],
    },
    supabase: {
        // Options
        // Remove or comment out the auth configuration
        auth: {
            // Auth configuration options
        },
        exclude: ['/membership'],
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    colorMode: {
        preference: 'dark'
    }
})
