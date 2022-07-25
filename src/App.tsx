import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/nav'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'
import MainPage from './pages/mainPage'
import UserPage from './pages/userPage'
import UsersPage from './pages/usersPage'
import store from './store/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
