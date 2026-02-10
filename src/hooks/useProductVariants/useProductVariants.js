import { useMemo, useState } from 'react'

export const useProductVariants = (variants, cartItems) => {
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    const availableVariants = useMemo(() => {
        return variants.map((v) => {
            const cartItemQuantity =
                cartItems.find((i) => i.productVariantId === v.id)?.quantity ??
                0

            return {
                ...v,
                availableStockForUser: v.stock - cartItemQuantity
            }
        })
    }, [variants, cartItems])

    /* -------------------------colors-&-sizes------------------------------- */
    const colors = useMemo(() => {
        const map = new Map()

        availableVariants.forEach((v) => {
            if (selectedSize && v.size !== selectedSize) return

            const existing = map.get(v.colorHex)

            const isAvailable = v.availableStockForUser > 0

            if (!existing) {
                map.set(v.colorHex, {
                    name: v.colorName,
                    hex: v.colorHex,
                    isAvailable
                })
            } else if (isAvailable) {
                existing.isAvailable = true
            }
        })

        return Array.from(map.values())
    }, [availableVariants, selectedSize])

    const sizes = useMemo(() => {
        const map = new Map()

        availableVariants.forEach((v) => {
            if (selectedColor && v.colorHex !== selectedColor) return

            const existing = map.get(v.size)

            const isAvailable = v.availableStockForUser > 0

            if (!existing) {
                map.set(v.size, {
                    name: v.size,
                    isAvailable
                })
            } else if (isAvailable) {
                existing.isAvailable = true
            }
        })

        return Array.from(map.values())
    }, [availableVariants, selectedColor])
    /* -------------------------onSelect------------------------------- */
    const onSelectColor = (color) => {
        setSelectedColor(color)
    }
    const onSelectSize = (size) => {
        setSelectedSize(size)
    }
    /* -------------------------selectedVariant------------------------------- */
    const selectedVariant = useMemo(() => {
        if (!selectedColor || !selectedSize) return null
        return availableVariants.find(
            (v) => v.size === selectedSize && v.colorHex === selectedColor
        )
    }, [availableVariants, selectedColor, selectedSize])

    return {
        colors,
        sizes,
        selectedColor,
        selectedSize,
        onSelectColor,
        onSelectSize,
        selectedVariant
    }
}
