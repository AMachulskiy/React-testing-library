import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Test App', () => {
  test('Render main page', () => {
    render(<App />)
  })
})
