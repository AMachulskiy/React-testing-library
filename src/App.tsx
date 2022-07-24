import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainPage from './pages/mainPage'
import store from './store/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </BrowserRouter>
  )
}

export default App
