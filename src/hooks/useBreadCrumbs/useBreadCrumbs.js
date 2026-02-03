import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PAGE_NAMES = {
    '/': 'Home',
    '/catalog': 'Catalog',
    '/cart': 'Cart',
    '/profile': 'Profile'
}

const formatSlug = (slug) => {
    if (!slug) return ''
    return slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

const removeOutlet = (path) => {
    return path.replace(/\/(reviews|faq)$/, '')
}

const isProductPage = (path) => {
    const segments = path.split('/').filter(Boolean)
    return segments[0] === 'catalog' && segments.length === 3
}

const getProductName = (path) => {
    const segments = path.split('/').filter(Boolean)
    return formatSlug(segments[2])
}

export const useBreadcrumbs = () => {
    const location = useLocation()
    const [history, setHistory] = useState([])

    useEffect(() => {
        const path = removeOutlet(location.pathname)
        const search = location.search
        const isProduct = isProductPage(path)

        const currentPage = {
            path: path,
            search: search,
            url: path + search,
            name: isProduct ? getProductName(path) : PAGE_NAMES[path] || 'Page',
            isProduct: isProduct
        }

        setHistory((prevHistory) => {
            const saved = sessionStorage.getItem('breadcrumbHistory')
            let newHistory = saved ? JSON.parse(saved) : prevHistory

            if (newHistory.length === 0) {
                newHistory =
                    path === '/'
                        ? [currentPage]
                        : [
                              { path: '/', search: '', url: '/', name: 'Home' },
                              currentPage
                          ]
            } else {
                const lastPage = newHistory[newHistory.length - 1]

                if (removeOutlet(lastPage.path) === path) {
                    newHistory[newHistory.length - 1] = currentPage
                } else {
                    const existingIndex = newHistory.findIndex(
                        (page) => removeOutlet(page.path) === path
                    )

                    if (existingIndex !== -1) {
                        if (path === '/') {
                            newHistory = [currentPage]
                        } else {
                            newHistory.splice(existingIndex, 1)
                            newHistory.push(currentPage)
                        }
                    } else {
                        if (newHistory[0].path !== '/') {
                            newHistory.unshift({
                                path: '/',
                                search: '',
                                url: '/',
                                name: 'Home'
                            })
                        }

                        if (lastPage.isProduct && path === '/catalog') {
                            newHistory = newHistory.filter(
                                (page) => !page.isProduct
                            )
                        }

                        newHistory.push(currentPage)

                        if (newHistory.length > 5) {
                            newHistory = [
                                newHistory[0],
                                ...newHistory.slice(-4)
                            ]
                        }
                    }
                }
            }

            sessionStorage.setItem(
                'breadcrumbHistory',
                JSON.stringify(newHistory)
            )
            return newHistory
        })
    }, [location.pathname, location.search])

    return history
}
