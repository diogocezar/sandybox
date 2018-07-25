import React        from 'react'
import ReactDOM     from 'react-dom'
import { Provider } from 'react-redux'

// CSS
import './assets/styles/base.css'

// Page
import Home from './pages/Home/Home.js'

// Store
import Store from './store'

// ServiceWorker
import registerServiceWorker from './service-worker/registerServiceWorker'

// Rendering
ReactDOM.render(
    <Provider store={Store}>
        <Home/>
    </Provider>
    ,document.getElementById('root')
)

registerServiceWorker()