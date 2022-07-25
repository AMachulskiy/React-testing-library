import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import createStore from '@src/store/store'
import Counter from './counter'

describe('counter', () => {
  beforeEach(() => {
    render(
      <Provider
        store={createStore({
          counter: {
            value: 1000,
          },
        })}
      >
        <Counter />
      </Provider>
    )
  })
  test('render counter with state', () => {
    const counter = screen.getByTestId('counter-value')
    expect(counter).toHaveTextContent('1000')
  })
  test('increment/decrement', async () => {
    const counter = screen.getByTestId('counter-value')
    const dec = screen.getByTestId('dec-btn')
    const inc = screen.getByTestId('inc-btn')
    await userEvent.click(dec)
    expect(counter).toHaveTextContent('999')
    await userEvent.dblClick(inc)
    expect(counter).toHaveTextContent('1001')
  })
})
