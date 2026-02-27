import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Breadcrumbs from './UI/Breadcrumbs/Breadcrumbs'
import { Toaster } from 'react-hot-toast'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { toastOptions } from './utils/consts'
import { useCheckAuthQuery } from './api/user/userAPI'
import Loader from './UI/Loader/Loader'

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
