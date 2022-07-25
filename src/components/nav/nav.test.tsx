import App from '@src/App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Nav from './nav'

describe('test navigation', () => {
  test('site navigation', async () => {
    render(<App />)
    const link = {
      home: screen.getByTestId('link-home'),
      about: screen.getByTestId('link-about'),
      contact: screen.getByTestId('link-contact'),
      users: screen.getByTestId('link-users'),
      counter: screen.getByTestId('link-counter'),
    }
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
    await userEvent.click(link.about)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    await userEvent.click(link.contact)
    expect(screen.getByTestId('contact-page')).toBeInTheDocument()
    await userEvent.click(link.users)
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
    await userEvent.click(link.counter)
    expect(screen.getByTestId('counter-page')).toBeInTheDocument()
  })
})
