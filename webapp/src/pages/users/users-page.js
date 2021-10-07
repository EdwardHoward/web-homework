import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetUsers from '../../gql/users.gql'
import { UserTable } from '../../components/users/UserTable'

export function Users () {
  const { loading, error, data = {} } = useQuery(GetUsers)

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
        <h1>Users</h1>
      <UserTable data={data.users} />
    </Fragment>
  )
}
