import reducer, {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    setPromoCodeDiscount
} from './cartSlice.js'

const product = {
    id: 1,
    price: 80,
    basePrice: 100,
    quantity: 1,
    color: 'black',
    size: 'M'
}

describe('cartSlice', () => {
    it('adds new product to cart', () => {
        const state = reducer(undefined, addToCart(product))
        expect(state.items).toHaveLength(1)
        expect(state.items[0].quantity).toBe(1)
    })

    it('increments quantity for existing product', () => {
        const initial = reducer(undefined, addToCart(product))
        const state = reducer(initial, addToCart(product))

        expect(state.items).toHaveLength(1)
        expect(state.items[0].quantity).toBe(2)
    })

    it('removes product from cart', () => {
        const initial = reducer(undefined, addToCart(product))
        const state = reducer(initial, removeFromCart({ id: 1, color: 'black', size: 'M' }))

        expect(state.items).toHaveLength(0)
    })

    it('increments quantity by 1', () => {
        const initial = reducer(undefined, addToCart(product))
        const state = reducer(initial, incrementQuantity({ id: 1, color: 'black', size: 'M' }))

        expect(state.items[0].quantity).toBe(2)
    })

    it('decrements quantity but not below 1', () => {
        const initial = reducer(undefined, addToCart(product))
        const state = reducer(initial, decrementQuantity({ id: 1, color: 'black', size: 'M' }))

        expect(state.items[0].quantity).toBe(1)
    })

    it('sets promo code discount', () => {
        const state = reducer(undefined, setPromoCodeDiscount(20))
        expect(state.promoCodeDiscount).toBe(20)
    })
})
