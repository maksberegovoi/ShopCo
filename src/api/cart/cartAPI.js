import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => ({
                url: '/cart',
                method: 'GET'
            }),
            transformResponse: (response) => response.data,
            providesTags: ['Cart']
        }),
        addCartItem: builder.mutation({
            query: (body) => ({
                url: '/cart/items',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Cart']
        }),
        updateCartItemQuantity: builder.mutation({
            query: ({ quantity, id }) => ({
                url: `/cart/items/${id}`,
                method: 'PATCH',
                body: {
                    quantity
                }
            }),
            invalidatesTags: ['Cart']
        }),
        deleteCartItem: builder.mutation({
            query: (id) => ({
                url: `/cart/items/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cart']
        })
    })
})

export const {
    useGetCartQuery,
    useAddCartItemMutation,
    useDeleteCartItemMutation,
    useUpdateCartItemQuantityMutation
} = cartApi
