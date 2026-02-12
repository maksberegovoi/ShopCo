import React from 'react'
import styles from './Hero.module.scss'
import MyButton from '../../../UI/MyButton/MyButton.jsx'
import { CATALOG_ROUTE } from '../../../utils/consts.js'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../hooks/useTheme/useTheme.jsx'

const metrics = [
    { title: '200+', description: 'International Brands' },
    { title: '2,000+', description: 'High-Quality Products' },
    { title: '30,000+', description: 'Happy Customers' }
]

const brands = [
    {
        name: 'zara',
        src: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770843995/zara_jkkwd3.png',
        srcDark:
            'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770844225/zara_jkkwd3_4a99a5.png'
    },
    {
        name: 'versace',
        src: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770843995/versace_tkxlnd.png',
        srcDark:
            'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770844226/versace_tkxlnd_4a99a5.png'
    },
    {
        name: 'gucci',
        src: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770843994/gucci_exzysw.png',
        srcDark:
            'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770844222/gucci_exzysw_4a99a5.png'
    },
    {
        name: 'prada',
        src: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770843994/prada_eygopc.png',
        srcDark:
            'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770844221/prada_eygopc_4a99a5.png'
    },
    {
        name: 'calvinKlein',
        src: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770843994/calvinKlein_rszd3i.png',
        srcDark:
            'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770844223/calvinklein_rszd3i_4a99a5.png'
    }
]

const Hero = () => {
    const { theme } = useTheme()

    const isDark = theme === 'dark'

    return (
        <section className={styles.hero}>
            <div className={`${styles.heroContainer} container`}>
                <div className={styles.heroContent}>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>
                        Browse through our diverse range of meticulously crafted
                        garments, designed to bring out your individuality and
                        cater to your sense of style.
                    </p>
                    <MyButton
                        as={Link}
                        to={CATALOG_ROUTE}
                        classname={styles.heroBtn}
                    >
                        Shop Now
                    </MyButton>
                    <dl className={styles.metrics}>
                        {metrics.map((metric) => (
                            <div
                                key={metric.title}
                                className={styles.metricsColumn}
                            >
                                <dt className={styles.metricsTitle}>
                                    {metric.title}
                                </dt>
                                <dd>{metric.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <img
                    className={styles.heroImage}
                    src="https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770815603/herobg_j0kjfi.png"
                    alt="background image"
                />
            </div>
            <div className={styles.brands}>
                <div className={`${styles.brandContainer} container`}>
                    {brands.map((brand) => (
                        <img
                            className={styles.brandImg}
                            key={brand.name}
                            src={isDark ? brand.src : brand.srcDark}
                            alt="brand"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
