import { sortProducts } from '../sortProducts/sortProducts.js'

export const filterProducts = (filters, items) => {
    let filteredProducts = [...items]

    if (filters.brands && filters.brands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            filters.brands.includes(product.brand)
        )
    }

    if (filters.colors && filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            filters.colors.some((color) =>
                product.colors.some((colorObj) => colorObj.name === color)
            )
        )
    }

    if (filters.sizes && filters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
            filters.sizes.some((size) =>
                product.sizes.some((sizeObj) => sizeObj.name === size)
            )
        )
    }

    if (filters.gender) {
        filteredProducts = filteredProducts.filter(
            (product) => product.gender === filters.gender
        )
    }

    if (filters.type) {
        filteredProducts = filteredProducts.filter(
            (product) => product.type === filters.type
        )
    }

    if (filters.style) {
        filteredProducts = filteredProducts.filter(
            (product) => product.style === filters.style
        )
    }

    if (filters.maxPrice) {
        filteredProducts = filteredProducts.filter(
            (product) => product.price <= filters.maxPrice
        )
    }

    if (filters.sortBy) {
        filteredProducts = sortProducts(filteredProducts, filters.sortBy)
    }

    return filteredProducts
}
