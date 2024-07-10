// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        "@nuxt/fonts",
        'dayjs-nuxt',
        'nuxt-snackbar',
        "@sidebase/nuxt-auth"
    ],
    dayjs: {
        locales: ['en'],
        defaultLocale: 'en',
        plugins: ['relativeTime', 'advancedFormat'],
    },
    // routeRules: {
    //     '/': {redirect: '/login'},
    // },
    auth: {
        // origin: process.env.ORIGIN,
        isEnabled: true,
        globalAppMiddleware: true,
        origin: 'http://147.182.186.55:9098',
        endpoints: {
            signIn: {path: '/login', method: 'post'},
        }
    },
    fonts: {
        providers: {
            google: true,
        },
        priority: ['google'],
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
