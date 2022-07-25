import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/counter/counter'
import Nav from './components/nav/nav'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'
import MainPage from './pages/mainPage'
import UserPage from './pages/userPage'
import UsersPage from './pages/usersPage'
import createStore from './store/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={createStore()}>
        <Nav />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserPage />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
