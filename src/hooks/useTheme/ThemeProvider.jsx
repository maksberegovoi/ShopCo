import { useEffect, useState, createContext } from 'react'

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) setTheme(saved)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggle = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
