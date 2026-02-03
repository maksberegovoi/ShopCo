import { describe, it, expect, vi } from 'vitest'
import { filterProducts } from './filterProducts'
import { sortProducts } from '../sortProducts/sortProducts.js'

vi.mock('../sortProducts/sortProducts.js', () => ({
    sortProducts: vi.fn((items) => items)
}))

const products = [
    {
        id: 1,
        brand: 'nike',
        colors: [{ name: 'black' }, { name: 'white' }],
        sizes: [{ name: 'M' }, { name: 'L' }],
        gender: 'male',
        type: 'T-shirts',
        style: 'Casual',
        price: 100
    },
    {
        id: 2,
        brand: 'adidas',
        colors: [{ name: 'red' }],
        sizes: [{ name: 'S' }],
        gender: 'female',
        type: 'Hoodies',
        style: 'Sport',
        price: 150
    },
    {
        id: 3,
        brand: 'nike',
        colors: [{ name: 'black' }],
        sizes: [{ name: 'S' }, { name: 'M' }],
        gender: 'male',
        type: 'T-shirts',
        style: 'Sport',
        price: 80
    }
]

describe('filterProducts', () => {
    it('filters by brand', () => {
        const result = filterProducts({ brands: ['nike'] }, products)
        expect(result.map((p) => p.id)).toEqual([1, 3])
    })

    it('filters by colors', () => {
        const result = filterProducts({ colors: ['red'] }, products)
        expect(result.map((p) => p.id)).toEqual([2])
    })

    it('filters by sizes', () => {
        const result = filterProducts({ sizes: ['L'] }, products)
        expect(result.map((p) => p.id)).toEqual([1])
    })

    it('filters by gender', () => {
        const result = filterProducts({ gender: 'female' }, products)
        expect(result.map((p) => p.id)).toEqual([2])
    })

    it('filters by type', () => {
        const result = filterProducts({ type: 'T-shirts' }, products)
        expect(result.map((p) => p.id)).toEqual([1, 3])
    })

    it('filters by style', () => {
        const result = filterProducts({ style: 'Sport' }, products)
        expect(result.map((p) => p.id)).toEqual([2, 3])
    })

    it('filters by maxPrice', () => {
        const result = filterProducts({ maxPrice: 90 }, products)
        expect(result.map((p) => p.id)).toEqual([3])
    })

    it('applies multiple filters together', () => {
        const result = filterProducts(
            {
                brands: ['nike'],
                colors: ['black'],
                gender: 'male',
                type: 'T-shirts'
            },
            products
        )
        expect(result.map((p) => p.id)).toEqual([1, 3])
    })

    it('returns empty array when nothing matches', () => {
        const result = filterProducts({ brands: ['puma'] }, products)
        expect(result).toEqual([])
    })

    it('calls sortProducts when sortBy is provided', () => {
        filterProducts({ sortBy: 'priceUp' }, products)
        expect(sortProducts).toHaveBeenCalledTimes(1)
    })

    it('does not mutate original items array', () => {
        filterProducts({ brands: ['nike'] }, products)
        expect(products.map((p) => p.id)).toEqual([1, 2, 3])
    })
})
