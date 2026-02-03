import { createSelector } from '@reduxjs/toolkit'

export const cartProducts = (state) => state.cart.items
export const cartPromoCodeDiscount = (state) => state.cart.promoCodeDiscount
export const cartDeliveryFee = (state) => state.cart.deliveryFee

export const calculateSummary = createSelector(
    [cartProducts, cartPromoCodeDiscount, cartDeliveryFee],
    (products, promoCodeDiscount, deliveryFee) => {
        let { subTotal, total } = products.reduce(
            (acc, product) => ({
                subTotal: acc.subTotal + product.basePrice * product.quantity,
                total: acc.total + product.price * product.quantity
            }),
            { subTotal: 0, total: 0 }
        )
        const discount = subTotal - total
        const promoCodeDiscountValue = total * (promoCodeDiscount / 100)
        total = total - promoCodeDiscountValue + deliveryFee

        return { subTotal, total, discount, promoCodeDiscountValue }
    }
)
