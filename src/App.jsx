import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Breadcrumbs from './UI/Breadcrumbs/Breadcrumbs.jsx'
import { Toaster } from 'react-hot-toast'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import { toastOptions } from './utils/consts.js'
import { useCheckAuthQuery } from './api/user/userAPI.js'
import Loader from './UI/Loader/Loader.jsx'

function App() {
    const { isLoading } = useCheckAuthQuery()

    if (isLoading) return <Loader />
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Header />
                <Breadcrumbs />
                <AppRouter />
                <Footer />
                <Toaster position="top-right" toastOptions={toastOptions} />
            </ErrorBoundary>
        </BrowserRouter>
    )
}

export default App
