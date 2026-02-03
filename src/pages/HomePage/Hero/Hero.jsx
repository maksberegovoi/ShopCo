import React from 'react'
import styles from './Hero.module.scss'
import MyButton from '../../../UI/MyButton/MyButton.jsx'
import heroBg from '../../../../assets/backgroundImages/herobg.png'
import { CATALOG_ROUTE } from '../../../utils/consts.js'
import zara from '../../../../assets/brands/zara.png'
import versace from '../../../../assets/brands/versace.png'
import prada from '../../../../assets/brands/prada.png'
import gucci from '../../../../assets/brands/gucci.png'
import calvinKlein from '../../../../assets/brands/calvinKlein.png'

const metrics = [
    { title: '200+', description: 'International Brands' },
    { title: '2,000+', description: 'High-Quality Products' },
    { title: '30,000+', description: 'Happy Customers' }
]

const brands = [
    { name: 'versace', icon: versace },
    { name: 'zara', icon: zara },
    { name: 'gucci', icon: gucci },
    { name: 'prada', icon: prada },
    { name: 'calvinKlein', icon: calvinKlein }
]

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.heroContainer} container`}>
                <div className={styles.heroContent}>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>
                        Browse through our diverse range of meticulously crafted garments, designed
                        to bring out your individuality and cater to your sense of style.
                    </p>
                    <MyButton to={CATALOG_ROUTE} classname={styles.heroBtn}>
                        Shop Now
                    </MyButton>
                    <dl className={styles.metrics}>
                        {metrics.map((metric) => (
                            <div key={metric.title} className={styles.metricsColumn}>
                                <dt className={styles.metricsTitle}>{metric.title}</dt>
                                <dd>{metric.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <img className={styles.heroImage} src={heroBg} alt="background image" />
            </div>
            <div className={styles.brands}>
                <div className={`${styles.brandContainer} container`}>
                    {brands.map((brand) => (
                        <img
                            className={styles.brandImg}
                            key={brand.name}
                            src={brand.icon}
                            alt="brand"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
