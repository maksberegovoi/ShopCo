import { api } from '../api.jsx'

export const cartApi = api.injectEndpoints({
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
        }),
        cartPreview: builder.query({
            query: (body) => ({
                url: `/cart/preview`,
                method: 'POST',
                body
            }),
            transformResponse: (response) => response.data
        })
    })
})

export const {
    useGetCartQuery,
    useAddCartItemMutation,
    useDeleteCartItemMutation,
    useUpdateCartItemQuantityMutation,
    useCartPreviewQuery
} = cartApi
