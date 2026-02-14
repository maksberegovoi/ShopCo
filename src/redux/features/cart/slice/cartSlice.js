import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] // {productVariantId: number, quantity: number}[]
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload

            const existing = state.items.find(
                (item) => item.productVariantId === product.productVariantId
            )

            if (existing) {
                existing.quantity += product.quantity
            } else {
                state.items.push(product)
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload

            const existing = state.items.find(
                (item) => item.productVariantId === id
            )

            if (existing) {
                state.items = state.items.filter(
                    (exist) => exist.productVariantId !== id
                )
            }
        },

        incrementQuantity: (state, action) => {
            const id = action.payload

            const existing = state.items.find(
                (item) => item.productVariantId === id
            )

            if (existing && existing.quantity > 0) existing.quantity += 1
        },

        decrementQuantity: (state, action) => {
            const id = action.payload

            const existing = state.items.find(
                (item) => item.productVariantId === id
            )

            if (existing && existing.quantity > 0) existing.quantity -= 1
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions
export default cartSlice.reducer
