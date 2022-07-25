import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'

const MainPage: ReactFC = () => {
  const [state, setState] = useState(null)
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState('test@mail.ru')

  const changeState = () => {
    setTimeout(() => {
      setState('Cool!')
    }, 1001)
  }

  const changeChecked = () => {
    setChecked(!checked)
  }

  const handleValue = (evnt) => {
    setValue(evnt.target.value)
  }

  useEffect(() => {
    changeState()
  }, [])

  return (
    <div data-testid='main-page'>
      <h1
        data-testid='HAPPY'
        title='Happy'
        className='happy-title fixed'
        style={{
          color: 'white',
        }}
      >
        Happy hacking!
      </h1>
      {!!state && <div data-testid='state-elem'>{state}</div>}
      <h2 data-testid='checkbox-status'>{checked ? 'Checked' : 'UnChecked'}</h2>
      <input type='checkbox' data-testid='checkbox' onChange={changeChecked} />
      <input
        type='text'
        data-testid='input'
        placeholder='Введите ваш email'
        onChange={handleValue}
        value={value}
      />
      <h3>{value}</h3>
    </div>
  )
}

export default MainPage
