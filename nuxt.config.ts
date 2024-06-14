// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/supabase', "@nuxt/fonts", 'dayjs-nuxt'],
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
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/membership'],
        }
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
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'primary': '#0A62D0',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
        },
    },
})
