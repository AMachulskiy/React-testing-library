import counterSlice, { decrement, increment } from './counterSlice'

describe('counter Store', () => {
  test('decrement', () => {
    expect(counterSlice({ value: 0 }, decrement())).toEqual({ value: -1 })
  })
  test('increment', () => {
    expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 })
  })
  test('not initial state', () => {
    expect(counterSlice(undefined, decrement())).toEqual({ value: -1 })
    expect(counterSlice(undefined, increment())).toEqual({ value: 1 })
  })
})
