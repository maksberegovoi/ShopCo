import { api } from '../api.jsx'

export const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => ({
                url: `/products`,
                method: 'GET',
                params
            }),
            transformResponse: (response) => response.data
        }),
        getProductFilters: builder.query({
            query: () => ({
                url: `/products/filters`,
                method: 'GET'
            }),
            transformResponse: (response) => response.data
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            }),
            transformResponse: (response) => response.data
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
    useGetProductReviewsQuery,
    useGetProductFiltersQuery
} = productsApi
