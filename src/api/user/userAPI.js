import { api } from '../api.jsx'

export const userApi = api.injectEndpoints({
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
            // TODO: delete cart items, all user data
            query: () => ({
                url: '/user/logout',
                method: 'POST'
            }),
            invalidateTags: ['Cart', 'User', 'Orders']
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
