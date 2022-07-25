import { configure, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

configure({
  asyncUtilTimeout: 2000,
})

describe('Test App', () => {
  test('Render main page', () => {
    render(<App />)
    const title = screen.getByTestId(/happy/i)
    expect(title).toBeInTheDocument()
    expect(title).toHaveAttribute('title', 'Happy')
    expect(title).toHaveClass('happy-title fixed')
    expect(title).toHaveStyle({
      color: 'white',
    })
  })
  test('Async findBy', async () => {
    render(<App />)
    const stateElem = await screen.findByTestId('state-elem')
    expect(stateElem).toBeInTheDocument()
  })
  test('test events', () => {
    render(<App />)
    const checkbox = screen.getByTestId('checkbox')
    const status = screen.getByTestId('checkbox-status')
    expect(status).toHaveTextContent('UnChecked')
    fireEvent.click(checkbox)
    expect(status).toHaveTextContent('Checked')
    expect(checkbox).toBeInTheDocument()
  })
  test('test snapshot', () => {
    render(<App />)
    const input = screen.getByTestId('input')
    expect(input).toMatchSnapshot()
  })
  test('test userEvent', async () => {
    render(<App />)
    const input = screen.getByTestId('input')
    expect(input).toMatchSnapshot()
    fireEvent.input(input, {
      target: {
        value: '138',
      },
    })
    expect(input).toHaveValue('138')
    await userEvent.type(input, 'Boom!')
    expect(screen.getByText(/boom/i)).toHaveTextContent('Boom!')
  })
})
