import React from 'react'
import { string, func } from 'prop-types'
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import GetUsers from '../../gql/users.gql'
import { useQuery } from '@apollo/client'

export function UserDropdown ({ value, onChange }) {
  const { loading, error, data = {} } = useQuery(GetUsers)

  if (!loading && !error) {
    return (
      <FormControl fullWidth>
        <InputLabel id='user-select-label'>User</InputLabel>
        <Select label='Users' onChange={onChange} value={value}>
          {data.users.map(user => (
            <MenuItem key={user.id} value={user.id}>{user.firstName} {user.lastName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }

  return null
}

UserDropdown.propTypes = {
  value: string,
  onChange: func
}
