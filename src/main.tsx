import { createRoot } from 'react-dom/client'
import './main.scss'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import ThemeProvider from './hooks/useTheme/ThemeProvider'
import { persistor, store } from './redux/store'
import App from './App'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/*<React.StrictMode>*/}
            <ThemeProvider>
                <App />
            </ThemeProvider>
            {/*</React.StrictMode>*/}
        </PersistGate>
    </Provider>
)
