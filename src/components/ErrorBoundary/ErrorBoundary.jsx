import { ErrorPage } from '../../pages/ErrorPage/ErrorPage.jsx'
import React, { Suspense } from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
