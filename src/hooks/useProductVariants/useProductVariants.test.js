import { renderHook } from '@testing-library/react'
import { useProductVariants } from './useProductVariants.js'

describe('useProductVariants', () => {
    it('1', () => {
        const { result } = renderHook(() => useProductVariants(variants))

        console.dir(result, { depth: null })
        expect(result.current.selectedColor).toBeNull()
        expect(result.current.selectedSize).toBeNull()
        expect(result.current.selectedVariant).toBeNull()
    })
})

const variants = [
    {
        colorName: 'Red',
        colorHex: '#ff0000',
        size: 'M',
        stock: 10
    },
    {
        colorName: 'Red',
        colorHex: '#ff0000',
        size: 'L',
        stock: 0
    },
    {
        colorName: 'Blue',
        colorHex: '#0000ff',
        size: 'M',
        stock: 5
    },
    {
        colorName: 'Blue',
        colorHex: '#0000ff',
        size: 'L',
        stock: 3
    }
]
