import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import React from 'react'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/*<React.StrictMode>*/}
            <App />
            {/*</React.StrictMode>*/}
        </PersistGate>
    </Provider>
)
