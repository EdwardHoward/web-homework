import React from 'react'
import { useQuery } from '@apollo/client'
import GetUser from '../../gql/getUser.gql'
import { UserTable } from '../../components/users/UserTable'
import { useParams } from 'react-router-dom'
import { Query } from '../../components/query'

export function User () {
  const { id } = useParams()
  const { loading, error, data = {} } = useQuery(GetUser, {
    variables: {
      id
    }
  })

  return (
    <Query error={error} loading={loading}>
      <UserTable data={[data.user]} />
    </Query>
  )
}
