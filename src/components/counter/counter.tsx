import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { decrement, increment } from '@src/store/counter/counterSlice'

const Counter: ReactFC = () => {
  const { value } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const dec = () => dispatch(decrement())
  const inc = () => dispatch(increment())

  return (
    <div data-testid='counter-page'>
      <h1 data-testid='counter-value'>{value}</h1>
      <button data-testid='dec-btn' type='button' onClick={dec}>
        DEC
      </button>
      <button data-testid='inc-btn' type='button' onClick={inc}>
        INC
      </button>
    </div>
  )
}

export default Counter
