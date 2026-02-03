import React from 'react'
import HomeSections from './HomeSections/HomeSections.jsx'
import Hero from './Hero/Hero.jsx'
import ProductTypes from './ProductStyles/ProductStyles.jsx'

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
