import { useSearchParams } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import { maxProductPrice } from '../../utils/consts.js'

export const useFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const filters = useMemo(() => {
        const colors =
            searchParams.get('colors')?.split(',').filter(Boolean) || []
        const sizes =
            searchParams.get('sizes')?.split(',').filter(Boolean) || []
        const brands =
            searchParams.get('brands')?.split(',').filter(Boolean) || []

        return {
            sortBy: searchParams.get('sortBy') || '',
            gender: searchParams.get('gender') || '',
            type: searchParams.get('type') || '',
            brands,
            colors,
            sizes,
            style: searchParams.get('style') || '',
            maxPrice: Number(searchParams.get('maxPrice')) || 1000,
            category: searchParams.get('category') || ''
        }
    }, [searchParams])

    const resetFilters = useCallback(() => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)

            params.delete('colors')
            params.delete('category')
            params.delete('sizes')
            params.delete('brands')
            params.delete('sortBy')
            params.delete('gender')
            params.delete('type')
            params.delete('style')
            params.delete('maxPrice')

            return params
        })
    }, [setSearchParams])

    const toggleCategory = useCallback(
        (category) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                if (params.get('category') === category) {
                    params.delete('category')
                } else {
                    params.set('category', category)
                }
                return params
            })
        },
        [setSearchParams]
    )

    const toggleType = useCallback(
        (type) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                if (params.get('type') === type) {
                    params.delete('type')
                } else {
                    params.set('type', type)
                }
                return params
            })
        },
        [setSearchParams]
    )

    const toggleColor = useCallback(
        (color) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                const colors =
                    params.get('colors')?.split(',').filter(Boolean) || []

                if (colors.includes(color)) {
                    const newColors = colors.filter((c) => c !== color)
                    if (newColors.length > 0) {
                        params.set('colors', newColors.join(','))
                    } else {
                        params.delete('colors')
                    }
                } else {
                    params.set('colors', [...colors, color].join(','))
                }

                return params
            })
        },
        [setSearchParams]
    )

    const toggleSize = useCallback(
        (size) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                const sizes =
                    params.get('sizes')?.split(',').filter(Boolean) || []

                if (sizes.includes(size)) {
                    const newSizes = sizes.filter((s) => s !== size)
                    if (newSizes.length > 0) {
                        params.set('sizes', newSizes.join(','))
                    } else {
                        params.delete('sizes')
                    }
                } else {
                    params.set('sizes', [...sizes, size].join(','))
                }

                return params
            })
        },
        [setSearchParams]
    )

    const toggleStyle = useCallback(
        (style) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                if (params.get('style') === style) {
                    params.delete('style')
                } else {
                    params.set('style', style)
                }
                return params
            })
        },
        [setSearchParams]
    )

    const setMaxPrice = useCallback(
        (price) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)

                if (price === maxProductPrice) {
                    params.delete('maxPrice')
                } else {
                    params.set('maxPrice', String(price))
                }

                return params
            })
        },
        [setSearchParams]
    )

    const setSortBy = useCallback(
        (sortBy) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                if (params.get('sortBy') === sortBy) {
                    params.delete('sortBy')
                } else {
                    params.set('sortBy', sortBy)
                }
                return params
            })
        },
        [setSearchParams]
    )

    const toggleBrand = useCallback(
        (brand) => {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                const brands =
                    params.get('brands')?.split(',').filter(Boolean) || []

                if (brands.includes(brand)) {
                    const newBrands = brands.filter((c) => c !== brand)
                    if (newBrands.length > 0) {
                        params.set('brands', newBrands.join(','))
                    } else {
                        params.delete('brands')
                    }
                } else {
                    params.set('brands', [...brands, brand].join(','))
                }

                return params
            })
        },
        [setSearchParams]
    )

    return {
        filters,
        toggleType,
        toggleColor,
        toggleSize,
        toggleStyle,
        setMaxPrice,
        setSortBy,
        toggleBrand,
        resetFilters,
        toggleCategory
    }
}

// useEffect(() => {
//   setPrice(maxProductPrice);
// }, [resetFilters]);
