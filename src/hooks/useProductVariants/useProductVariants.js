import { useMemo, useState } from 'react'

export const useProductVariants = (variants) => {
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    /* -------------------------first paint------------------------------- */
    const baseAvailableColors = useMemo(() => {
        const map = new Map()

        variants.forEach((v) => {
            const existing = map.get(v.colorHex)
            if (!existing) {
                map.set(v.colorHex, {
                    name: v.colorName,
                    hex: v.colorHex,
                    isAvailable: v.stock > 0
                })
            } else if (v.stock > 0) {
                existing.isAvailable = true
            }
        })

        return Array.from(map.values()).sort((a, b) =>
            a.hex.localeCompare(b.hex)
        )
    }, [variants])

    const baseAvailableSizes = useMemo(() => {
        const map = new Map()

        variants.forEach((v) => {
            const existing = map.get(v.size)
            if (!existing) {
                map.set(v.size, {
                    name: v.size,
                    isAvailable: v.stock > 0
                })
            } else if (v.stock > 0) {
                existing.isAvailable = true
            }
        })

        return Array.from(map.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
        )
    }, [variants])

    /* -------------------------onSelect------------------------------- */
    const onSelectColor = (color) => {
        setSelectedColor(color)
    }

    const onSelectSize = (size) => {
        setSelectedSize(size)
    }

    /* -------------------------onSelect------------------------------- */
    const availableColors = useMemo(() => {
        return variants
            .filter((v) => v.size === selectedSize)
            .map((v) => ({
                name: v.colorName,
                hex: v.colorHex,
                isAvailable: v.stock > 0
            }))
            .sort((a, b) => a.hex.localeCompare(b.hex))
    }, [variants, selectedSize])

    const availableSizes = useMemo(() => {
        return variants
            .filter((v) => v.colorHex === selectedColor)
            .map((v) => ({
                name: v.size,
                isAvailable: v.stock > 0
            }))
            .sort((a, b) => a.name.localeCompare(b.name))
    }, [variants, selectedColor])

    const selectedVariant = useMemo(() => {
        if (!selectedColor || !selectedSize) return null
        return variants.find(
            (v) => v.size === selectedSize && v.colorHex === selectedColor
        )
    }, [variants, selectedColor, selectedSize])

    return {
        baseAvailableColors,
        baseAvailableSizes,
        availableColors,
        availableSizes,
        selectedColor,
        selectedSize,
        onSelectColor,
        onSelectSize,
        selectedVariant
    }
}
