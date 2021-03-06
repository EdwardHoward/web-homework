import React from 'react'
import { useQuery } from '@apollo/client'
import GetMerchant from '../../gql/getMerchant.gql'
import { MerchantTable } from '../../components/merchants/MerchantTable'
import { useParams } from 'react-router-dom'
import { Query } from '../../components/query/Query'

export function Merchant () {
  const { id } = useParams()
  const { loading, error, data = {} } = useQuery(GetMerchant, {
    variables: {
      id
    }
  })

  return (
    <Query error={error} loading={loading}>
      <MerchantTable data={[data.merchant]} />
    </Query>
  )
}
