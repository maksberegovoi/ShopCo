import { renderHook, act } from '@testing-library/react'
import { useProductVariants } from './useProductVariants'
import { describe, it, expect } from 'vitest'

const variants = [
    {
        id: 1,
        colorName: 'Black',
        colorHex: '#000',
        size: 'M',
        stock: 5
    },
    {
        id: 2,
        colorName: 'Black',
        colorHex: '#000',
        size: 'L',
        stock: 0
    },
    {
        id: 3,
        colorName: 'Red',
        colorHex: '#f00',
        size: 'M',
        stock: 3
    }
]

const cartItems = [
    {
        cartItemId: 10,
        productVariantId: 1,
        quantity: 2
    }
]

describe('useProductVariants', () => {
    it('calculates availableStockForUser correctly', () => {
        const { result } = renderHook(() =>
            useProductVariants(variants, cartItems)
        )

        const variant = result.current.colors.find((c) => c.hex === '#000')

        expect(variant).toBeDefined()
    })

    it('availableStockForUser subtracts cart quantity', () => {
        const { result } = renderHook(() =>
            useProductVariants(variants, cartItems)
        )

        const selected = result.current.sizes.find((s) => s.name === 'M')
        expect(selected?.isAvailable).toBe(true)
    })

    it('colors availability respects selected size', () => {
        const { result } = renderHook(() =>
            useProductVariants(variants, cartItems)
        )

        act(() => {
            result.current.onSelectSize('L')
        })

        const black = result.current.colors.find((c) => c.hex === '#000')

        expect(black?.isAvailable).toBe(false)
    })

    it('sizes availability respects selected color', () => {
        const { result } = renderHook(() =>
            useProductVariants(variants, cartItems)
        )

        act(() => {
            result.current.onSelectColor('#000')
        })

        const sizeM = result.current.sizes.find((s) => s.name === 'M')
        const sizeL = result.current.sizes.find((s) => s.name === 'L')

        expect(sizeM?.isAvailable).toBe(true)
        expect(sizeL?.isAvailable).toBe(false)
    })

    it('selectedVariant is null until both selectors chosen', () => {
        const { result } = renderHook(() =>
            useProductVariants(variants, cartItems)
        )

        expect(result.current.selectedVariant).toBeNull()

        act(() => {
            result.current.onSelectColor('#000')
        })

        expect(result.current.selectedVariant).toBeNull()
    })

    it('selectedVariant resolves correctly when both selectors chosen', () => {
        const { result } = renderHook(() =>
            useProductVariants(variants, cartItems)
        )

        act(() => {
            result.current.onSelectColor('#000')
            result.current.onSelectSize('M')
        })

        expect(result.current.selectedVariant).toEqual(
            expect.objectContaining({
                id: 1,
                availableStockForUser: 3
            })
        )
    })

    it('returns empty colors and sizes for empty variants', () => {
        const { result } = renderHook(() => useProductVariants([], []))

        expect(result.current.colors).toEqual([])
        expect(result.current.sizes).toEqual([])
        expect(result.current.selectedVariant).toBeNull()
    })
})
