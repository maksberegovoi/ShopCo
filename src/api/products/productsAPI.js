import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL_API
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            })
        })
    })
})

export const { useGetProductsQuery } = productsApi
