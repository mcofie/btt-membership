// file: ~/server/api/auth/[...].ts
// @ts-ignore
import CredentialsProvider from 'next-auth/providers/credentials'
// @ts-ignore
import {NuxtAuthHandler} from '#auth'

// @ts-ignore
export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    secret: '679D6A5F47765D7ED',
    pages: {
        signIn: '/login',
       // signIn: '/login',
        // signOut: '/login',
    },
    providers: [
        CredentialsProvider.default({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials: any) {

                const {data, pending} = await $fetch('user/signin', {
                    method: 'POST',
                    body: {
                        email: credentials.email,
                        password: credentials.password
                    },
                    headers: {
                        'Accept': 'application/json',
                    },
                    baseURL: "http://147.182.186.55:9098/api/v1/",
                })

                if (data) {
                    // return data
                    return {
                        token: data.token,
                    };
                } else {
                    throw createError({
                        statusCode: 403,
                        statusMessage: "Credentials not working",
                    });
                }
            }
        })]
})
