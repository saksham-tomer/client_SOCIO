import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from '@reduxjs/toolkit`'
import App from './App'
import store from './store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App />)
    </Provider>
)