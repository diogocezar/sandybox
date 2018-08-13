import React        from 'react'
import ReactDOM     from 'react-dom'
import { Provider } from 'react-redux'

// CSS
import './styles/base.css'

// Routes
import Routes from './routes'

// Store
import Store from './store'

// ServiceWorker
import registerServiceWorker from './service-worker/registerServiceWorker'

// Rendering
ReactDOM.render(
    <Provider store={Store}>
		<Routes/>
    </Provider>
    ,document.getElementById('root')
)

registerServiceWorker()