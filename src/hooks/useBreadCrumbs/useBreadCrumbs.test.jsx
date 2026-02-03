import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { useBreadcrumbs } from './useBreadcrumbs'

const renderWithRouter = (initialEntries) =>
    renderHook(() => useBreadcrumbs(), {
        wrapper: ({ children }) => (
            <MemoryRouter initialEntries={initialEntries}>
                <Routes>
                    <Route path="*" element={children} />
                </Routes>
            </MemoryRouter>
        )
    })

beforeEach(() => {
    sessionStorage.clear()
})

describe('useBreadcrumbs', () => {
    it('creates Home breadcrumb on root', () => {
        const { result } = renderWithRouter(['/'])

        expect(result.current).toEqual([
            {
                path: '/',
                search: '',
                url: '/',
                name: 'Home',
                isProduct: false
            }
        ])
    })

    it('adds page breadcrumb', () => {
        const { result } = renderWithRouter(['/catalog'])

        expect(result.current.map((b) => b.name)).toEqual(['Home', 'Catalog'])
    })

    it('detects product page and formats product name', () => {
        const { result } = renderWithRouter(['/catalog/men/black-t-shirt'])

        const last = result.current.at(-1)

        expect(last.isProduct).toBe(true)
        expect(last.name).toBe('Black T Shirt')
    })

    it('removes outlet segments from path', () => {
        const { result } = renderWithRouter([
            '/catalog/men/black-t-shirt/reviews'
        ])

        expect(result.current.at(-1).path).toBe('/catalog/men/black-t-shirt')
    })

    it('keeps Home as first breadcrumb', () => {
        const { result } = renderWithRouter(['/profile'])

        expect(result.current[0].path).toBe('/')
    })

    it('limits breadcrumbs length to 5', () => {
        renderWithRouter([
            '/',
            '/catalog',
            '/profile',
            '/cart',
            '/catalog/men/black-t-shirt',
            '/catalog/women/white-shirt'
        ])

        const saved = JSON.parse(sessionStorage.getItem('breadcrumbHistory'))

        expect(saved.length).toBeLessThanOrEqual(5)
        expect(saved[0].path).toBe('/')
    })

    it('restores history from sessionStorage', () => {
        sessionStorage.setItem(
            'breadcrumbHistory',
            JSON.stringify([
                {
                    path: '/',
                    search: '',
                    url: '/',
                    name: 'Home'
                }
            ])
        )

        const { result } = renderWithRouter(['/cart'])

        expect(result.current.map((b) => b.name)).toEqual(['Home', 'Cart'])
    })
})
