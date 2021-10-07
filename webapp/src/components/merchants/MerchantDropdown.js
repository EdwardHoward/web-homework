import React from 'react'
import { string, func } from 'prop-types'
import { MenuItem, Select } from '@mui/material'
import GetMerchants from '../../gql/merchants.gql'
import { useQuery } from '@apollo/client'

export function MerchantDropdown ({ value, onChange }) {
  const { loading, error, data = {} } = useQuery(GetMerchants)

  if (!loading && !error) {
    return (
      <Select onChange={onChange} value={value}>
        {data.merchants.map(merchant => (
          <MenuItem key={merchant.id} value={merchant.id}>{merchant.name}</MenuItem>
        ))}
      </Select>
    )
  }

  return null
}

MerchantDropdown.propTypes = {
  value: string,
  onChange: func
}
