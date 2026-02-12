import { useEffect, useState } from 'react'

export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState(() => {
        const width = window.innerWidth
        return {
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isDesktop: width >= 1024
        }
    })

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            const next = {
                isMobile: width < 768,
                isTablet: width >= 768 && width < 1024,
                isDesktop: width >= 1024
            }

            setDeviceType((prev) =>
                prev.isMobile !== next.isMobile ||
                prev.isTablet !== next.isTablet ||
                prev.isDesktop !== next.isDesktop
                    ? next
                    : prev
            )
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return deviceType
}
