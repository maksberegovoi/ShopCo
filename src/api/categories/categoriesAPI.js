import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const homePageApi = createApi({
    reducerPath: 'homePageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL
    }),
    endpoints: (builder) => ({
        getHomeSections: builder.query({
            query: () => ({
                url: '/home/categories',
                method: 'GET'
            }),
            transformResponse: (response) => response.data
        })
    })
})

export const { useGetHomeSectionsQuery } = homePageApi
