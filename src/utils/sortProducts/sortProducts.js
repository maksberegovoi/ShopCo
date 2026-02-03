export const sortProducts = (products, sortBy) => {
    const sorted = [...products]

    switch (sortBy) {
        case 'discount':
            return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0))

        case 'priceUp':
            return sorted.sort((a, b) => a.price - b.price)

        case 'priceDown':
            return sorted.sort((a, b) => b.price - a.price)

        case 'rating':
            return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))

        default:
            return sorted
    }
}
