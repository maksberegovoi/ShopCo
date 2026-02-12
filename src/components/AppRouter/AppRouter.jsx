import { Suspense, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loader from '../../UI/Loader/Loader.jsx'
import { RequireAuth } from './RequireAuth.jsx'
import { routes } from '../../routes/routes.jsx'

const AppRouter = () => {
    const location = useLocation()
    const previousPath = useRef(location.pathname)

    useEffect(() => {
        const currentPath = location.pathname
        const prevPath = previousPath.current

        const getProductBasePath = (path) => {
            const segments = path.split('/').filter(Boolean)
            if (segments[0] === 'catalog' && segments.length >= 3) {
                return `/${segments.slice(0, 3).join('/')}`
            }
            return path
        }

        const currentBasePath = getProductBasePath(currentPath)
        const prevBasePath = getProductBasePath(prevPath)
        const shouldScroll =
            currentBasePath !== prevBasePath ||
            !currentPath.startsWith('/catalog/')

        if (shouldScroll) {
            window.scrollTo(0, 0)
        }

        previousPath.current = currentPath
    }, [location.pathname])
    const renderRoute = (route) => {
        const { path, element, children, authOnly } = route

        let wrappedElement = (
            <Suspense fallback={<Loader />}>{element}</Suspense>
        )

        if (authOnly) {
            wrappedElement = <RequireAuth>{wrappedElement}</RequireAuth>
        }

        return (
            <Route key={path} path={path} element={wrappedElement}>
                {children?.map((child, index) =>
                    child.index ? (
                        <Route
                            key={`index-${index}`}
                            index
                            element={child.element}
                        />
                    ) : (
                        <Route
                            key={child.path}
                            path={child.path}
                            element={child.element}
                        />
                    )
                )}
            </Route>
        )
    }

    return <Routes>{routes.map(renderRoute)}</Routes>
}

export default AppRouter
