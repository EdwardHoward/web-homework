import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { TxTable } from '../../components/transactions/TxTable'

export function Transactions () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

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
      <TxTable data={data.transactions} />
    </Fragment>
  )
}
