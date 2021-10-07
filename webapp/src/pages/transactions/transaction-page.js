import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransaction from '../../gql/getTransaction.gql'
import { TxTable } from '../../components/transactions/TxTable'
import { useParams } from 'react-router-dom'
import { Query } from '../../components/query'

export function Transaction () {
  const { id } = useParams()
  const { loading, error, data = {} } = useQuery(GetTransaction, {
    variables: {
      id
    }
  })

  return (
    <Query error={error} loading={loading}>
      <TxTable data={[data.transaction]} />
    </Query>
  )
}
