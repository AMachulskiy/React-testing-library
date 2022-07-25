import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useParams } from 'react-router-dom'

const UserPage: ReactFC = () => {
  const { id } = useParams()

  return <h1 data-testid='user-page'>User ID: {id}</h1>
}

export default UserPage
