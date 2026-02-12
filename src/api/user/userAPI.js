import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Cart', 'Auth']
        }),
        signUp: builder.mutation({
            query: (body) => ({
                url: '/user/registration',
                method: 'POST',
                body
            })
        }),
        checkAuth: builder.query({
            query: () => ({
                url: '/user/me',
                method: 'GET'
            }),
            providesTags: ['Auth'],
            transformResponse: (response) => response.data
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'POST'
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignUpMutation,
    useCheckAuthQuery,
    useLazyCheckAuthQuery,
    useLogoutMutation
} = userApi
