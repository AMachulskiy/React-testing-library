import UserPage from '@src/pages/userPage'
import UsersPage from '@src/pages/usersPage'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Users, { IUser } from './users'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

interface IResponse {
  data: IUser[]
}

describe('Users component', () => {
  beforeAll(() => {
    const response: IResponse = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618',
            },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
        },
      ],
    }
    mockedAxios.get.mockResolvedValue(response)
  })

  test('get users', async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )
    const users = await screen.findAllByTestId('user')
    expect(users.length).toBe(2)
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  test('link to user page', async () => {
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserPage />} />
        </Routes>
      </MemoryRouter>
    )
    const users = await screen.findAllByTestId('user')
    expect(users.length).toBe(2)
    expect(mockedAxios.get).toBeCalledTimes(1)
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
    await userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
})
