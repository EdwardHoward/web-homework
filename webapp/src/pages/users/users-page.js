import React from 'react'
import { useQuery } from '@apollo/client'
import GetUsers from '../../gql/users.gql'
import { UserTable } from '../../components/users/UserTable'
import { Query } from '../../components/query/Query'

export function Users () {
  const { loading, error, data = {} } = useQuery(GetUsers)

  return (
    <Query error={error} loading={loading}>
      <UserTable data={data.users} />
    </Query>
  )
}
