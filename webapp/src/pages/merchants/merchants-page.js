import React from 'react'
import { useQuery } from '@apollo/client'
import GetMerchants from '../../gql/merchants.gql'
import { MerchantTable } from '../../components/merchants/MerchantTable'
import { Query } from '../../components/query/Query'

export function Merchants () {
  const { loading, error, data = {} } = useQuery(GetMerchants)

  return (
    <Query error={error} loading={loading}>
      <MerchantTable data={data.merchants} />
    </Query>
  )
}
