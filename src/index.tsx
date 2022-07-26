import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import createStore from './store/store'
import App from './App'

import '@styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={createStore()}>
    <App />
  </Provider>
)
