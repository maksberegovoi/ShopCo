import { useSearchParams } from 'react-router-dom'
import { useDeviceType } from '../useDeviceType'

export const useFilters = () => {
    const { isDesktop } = useDeviceType()
    const [searchParams, setSearchParams] = useSearchParams()

    const limit = isDesktop ? 9 : 6

    const resetFilters = () => {
        setSearchParams()
    }

    const setSingleParam = (name: string, value: string) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)
            params.set(name, value)

            if (name !== 'page') {
                params.set('page', '1')
            }

            return params
        })
    }

    const onSetParams = (name: string, id: string) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)
            const current = params.get(name)

            if (!current) {
                params.set(name, String(id))
            } else {
                const values = current.split(',')
                const exists = values.includes(id)

                const nextValues = exists
                    ? values.filter((v) => v !== id)
                    : [...values, id]

                if (nextValues.length === 0) {
                    params.delete(name)
                } else {
                    params.set(name, nextValues.join(','))
                }
            }

            params.set('page', '1')

            return params
        })
    }
    const parseIds = (key: string) => {
        const value = searchParams.get(key)
        if (!value) return undefined

        return value.split(',').map(Number)
    }

    const parseStrs = (key: string) => {
        const value = searchParams.get(key)
        if (!value) return undefined

        return value.split(',')
    }

    const queryFilters = {
        limit,
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
        sizeIds: parseIds('size'),
        brandIds: parseIds('brand'),
        categoryIds: parseIds('category'),
        typeIds: parseIds('type'),
        styleIds: parseIds('style'),
        genderIds: parseStrs('gender'),
        colors: parseStrs('colors'),
        sortBy: searchParams.get('sortBy')
            ? searchParams.get('sortBy')
            : undefined,
        maxPrice: searchParams.get('maxPrice')
            ? Number(searchParams.get('maxPrice'))
            : undefined
    }

    return {
        page: queryFilters.page,
        limit,
        onSetParams,
        queryFilters,
        resetFilters,
        setSingleParam
    }
}
