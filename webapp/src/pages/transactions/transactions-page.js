import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { TxTable } from '../../components/transactions/TxTable'
import { Query } from '../../components/query'

export function Transactions () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  return (
    <Query error={error} loading={loading}>
      <TxTable data={data.transactions} />
    </Query>
  )
}
