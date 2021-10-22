import React from 'react'
import { string, func } from 'prop-types'
import { MenuItem, TextField } from '@mui/material'
import GetUsers from '../../gql/users.gql'
import { useQuery } from '@apollo/client'
import { Query } from '../query/Query'

export function UserDropdown ({ value, onChange }) {
  const { loading, error, data = {} } = useQuery(GetUsers)

  return (
    <Query error={error} loading={loading}>
      <TextField
        data-testid='user-select'
        fullWidth
        label='User'
        onChange={onChange}
        select
        value={value}
      >
        {data.users?.map(user => (
          <MenuItem key={user.id} value={user.id}>{user.firstName} {user.lastName}</MenuItem>
        ))}
      </TextField>
    </Query>
  )
}

UserDropdown.propTypes = {
  value: string,
  onChange: func
}
