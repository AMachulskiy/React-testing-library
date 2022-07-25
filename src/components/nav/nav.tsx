import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav: ReactFC = () => {
  return (
    <nav>
      <Link data-testid='link-home' to='/'>
        Home
      </Link>
      <Link data-testid='link-about' to='/about'>
        About
      </Link>
      <Link data-testid='link-contact' to='/contact'>
        Contact
      </Link>
      <Link data-testid='link-users' to='/users'>
        Users
      </Link>
    </nav>
  )
}

export default Nav
