import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetUser from '../../gql/getUser.gql'
import { UserTable } from '../../components/users/UserTable'
import { useParams } from 'react-router-dom'

export function User () {
  const { id } = useParams()
  const { loading, error, data = {} } = useQuery(GetUser, {
    variables: {
      id
    }
  })

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
      <UserTable data={[data.user]} />
    </Fragment>
  )
}
