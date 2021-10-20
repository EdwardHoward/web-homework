import React from 'react'
import { string, func } from 'prop-types'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import GetMerchants from '../../gql/merchants.gql'
import { useQuery } from '@apollo/client'
import { Query } from '../query/Query'

export function MerchantDropdown ({ value, onChange }) {
  const { loading, error, data = {} } = useQuery(GetMerchants)

  return (
    <Query error={error} loading={loading}>
      <FormControl data-testid='merchant-select' fullWidth>
        <InputLabel id='merchant-select-label'>Merchant</InputLabel>
        <Select label='Merchant' onChange={onChange} value={value}>
          {data.merchants?.map(merchant => (
            <MenuItem key={merchant.id} value={merchant.id}>{merchant.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Query>
  )
}

MerchantDropdown.propTypes = {
  value: string,
  onChange: func
}
