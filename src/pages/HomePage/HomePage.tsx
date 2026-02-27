import React from 'react'
import HomeSections from './HomeSections/HomeSections'
import Hero from './Hero/Hero'
import ProductTypes from './ProductStyles/ProductStyles'

const HomePage = () => {
    return (
        <main>
            <Hero />
            <HomeSections />
            <ProductTypes />
        </main>
    )
}

export default HomePage
