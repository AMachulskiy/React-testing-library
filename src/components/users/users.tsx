import { ReactFC } from '@src/interfaces/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const Users: ReactFC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const getUsers = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div data-testid='users-page'>
      {users.map((user) => (
        <Link to={`${user.id}`} key={user.id} data-testid='user'>
          {user.name}
        </Link>
      ))}
    </div>
  )
}

export default Users
