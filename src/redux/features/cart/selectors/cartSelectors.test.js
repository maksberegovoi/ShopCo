import { calculateSummary } from './cartSelectors'

const state = {
    cart: {
        items: [
            {
                id: 1,
                basePrice: 100,
                price: 80,
                quantity: 2
            },
            {
                id: 2,
                basePrice: 50,
                price: 50,
                quantity: 1
            }
        ],
        promoCodeDiscount: 10,
        deliveryFee: 15
    }
}

describe('cart selectors', () => {
    it('calculates summary correctly', () => {
        const result = calculateSummary(state)

        expect(result.subTotal).toBe(250) // 200 + 50
        expect(result.discount).toBe(40) // 250 - 210
        expect(result.promoCodeDiscountValue).toBe(21) // 10% of 210
        expect(result.total).toBe(204) // 210 - 21 + 15
    })
})
