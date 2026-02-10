import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
            transformResponse: (response) => response.data
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            }),
            transformResponse: (response) => response.data,
            providesTags: ['']
        }),
        getProductAttributes: builder.query({
            query: (id) => ({
                url: `/products/${id}/attributes`,
                method: 'GET'
            }),
            transformResponse: (response) => response.data
        }),
        getProductReviews: builder.query({
            query: ({ id, limit }) => ({
                url: `/products/${id}/reviews`,
                params: { limit },
                method: 'GET'
            }),
            transformResponse: (response) => response.data
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetProductAttributesQuery,
    useGetProductReviewsQuery
} = productsApi
