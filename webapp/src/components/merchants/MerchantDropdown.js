import React from 'react'
import { string, func } from 'prop-types'
import { MenuItem, TextField } from '@mui/material'
import GetMerchants from '../../gql/merchants.gql'
import { useQuery } from '@apollo/client'
import { Query } from '../query/Query'

export function MerchantDropdown ({ value, onChange }) {
  const { loading, error, data = {} } = useQuery(GetMerchants)

  return (
    <Query error={error} loading={loading}>
      <TextField
        data-testid='merchant-select'
        fullWidth
        label='Merchant'
        onChange={onChange}
        select
        value={value}
      >
        {data.merchants?.map(merchant => (
          <MenuItem key={merchant.id} value={merchant.id}>{merchant.name}</MenuItem>
        ))}
      </TextField>
    </Query>
  )
}

MerchantDropdown.propTypes = {
  value: string,
  onChange: func
}
