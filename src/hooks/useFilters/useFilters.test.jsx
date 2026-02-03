import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { useFilters } from './useFilters'
import { maxProductPrice } from '../../utils/consts.js'

const wrapper = (initialEntries = ['/']) => {
    return ({ children }) => (
        <MemoryRouter initialEntries={initialEntries}>
            <Routes>
                <Route path="*" element={children} />
            </Routes>
        </MemoryRouter>
    )
}

describe('useFilters', () => {
    it('parses filters from search params', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper([
                '/?colors=black,white&sizes=M,L&brands=nike&gender=male&type=T-shirts&style=Casual&sortBy=priceUp&maxPrice=500&category=men'
            ])
        })

        expect(result.current.filters).toEqual({
            sortBy: 'priceUp',
            gender: 'male',
            type: 'T-shirts',
            brands: ['nike'],
            colors: ['black', 'white'],
            sizes: ['M', 'L'],
            style: 'Casual',
            maxPrice: 500,
            category: 'men'
        })
    })

    it('uses default values when params are missing', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        expect(result.current.filters).toEqual({
            sortBy: '',
            gender: '',
            type: '',
            brands: [],
            colors: [],
            sizes: [],
            style: '',
            maxPrice: 1000,
            category: ''
        })
    })

    it('toggles color correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.toggleColor('black'))
        expect(result.current.filters.colors).toEqual(['black'])

        act(() => result.current.toggleColor('black'))
        expect(result.current.filters.colors).toEqual([])
    })

    it('toggles size correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.toggleSize('M'))
        expect(result.current.filters.sizes).toEqual(['M'])

        act(() => result.current.toggleSize('M'))
        expect(result.current.filters.sizes).toEqual([])
    })

    it('toggles brand correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.toggleBrand('nike'))
        expect(result.current.filters.brands).toEqual(['nike'])

        act(() => result.current.toggleBrand('nike'))
        expect(result.current.filters.brands).toEqual([])
    })

    it('toggles type correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.toggleType('T-shirts'))
        expect(result.current.filters.type).toBe('T-shirts')

        act(() => result.current.toggleType('T-shirts'))
        expect(result.current.filters.type).toBe('')
    })

    it('toggles style correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.toggleStyle('Casual'))
        expect(result.current.filters.style).toBe('Casual')

        act(() => result.current.toggleStyle('Casual'))
        expect(result.current.filters.style).toBe('')
    })

    it('toggles category correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.toggleCategory('men'))
        expect(result.current.filters.category).toBe('men')

        act(() => result.current.toggleCategory('men'))
        expect(result.current.filters.category).toBe('')
    })

    it('sets and resets maxPrice correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.setMaxPrice(500))
        expect(result.current.filters.maxPrice).toBe(500)

        act(() => result.current.setMaxPrice(maxProductPrice))
        expect(result.current.filters.maxPrice).toBe(1000)
    })

    it('sets and unsets sortBy correctly', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper()
        })

        act(() => result.current.setSortBy('priceUp'))
        expect(result.current.filters.sortBy).toBe('priceUp')

        act(() => result.current.setSortBy('priceUp'))
        expect(result.current.filters.sortBy).toBe('')
    })

    it('resets all filters', () => {
        const { result } = renderHook(() => useFilters(), {
            wrapper: wrapper([
                '/?colors=black&sizes=M&brands=nike&gender=male&type=T-shirts&style=Casual&sortBy=priceUp&maxPrice=500&category=men'
            ])
        })

        act(() => result.current.resetFilters())

        expect(result.current.filters).toEqual({
            sortBy: '',
            gender: '',
            type: '',
            brands: [],
            colors: [],
            sizes: [],
            style: '',
            maxPrice: 1000,
            category: ''
        })
    })
})
