import { describe, it, expect } from 'vitest'
import { sortProducts } from './sortProducts.js'

const products = [
    { id: 1, price: 100, discount: 10, rating: 4.5 },
    { id: 2, price: 50, discount: 0, rating: 3.8 },
    { id: 3, price: 200, rating: 4.9 },
    { id: 4, price: 150, discount: 20 }
]

describe('sortProducts', () => {
    it('sort by discount desc', () => {
        const result = sortProducts(products, 'discount')
        expect(result.map((p) => p.id)).toEqual([4, 1, 2, 3])
    })

    it('sort by price ascending', () => {
        const result = sortProducts(products, 'priceUp')
        expect(result.map((p) => p.id)).toEqual([2, 1, 4, 3])
    })

    it('sort by price descending', () => {
        const result = sortProducts(products, 'priceDown')
        expect(result.map((p) => p.id)).toEqual([3, 4, 1, 2])
    })

    it('sort by rating desc', () => {
        const result = sortProducts(products, 'rating')
        expect(result.map((p) => p.id)).toEqual([3, 1, 2, 4])
    })

    it('unknown sort type returns original order', () => {
        const result = sortProducts(products, 'unknown')
        expect(result.map((p) => p.id)).toEqual([1, 2, 3, 4])
    })

    it('does not mutate original array', () => {
        sortProducts(products, 'priceUp')
        expect(products.map((p) => p.id)).toEqual([1, 2, 3, 4])
    })
})
