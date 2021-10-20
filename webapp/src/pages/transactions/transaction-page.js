import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransaction from '../../gql/getTransaction.gql'
import { TxTable } from '../../components/transactions/TxTable'
import { Query } from '../../components/query/Query'
import { string } from 'prop-types'

export function Transaction ({ id }) {
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

Transaction.propTypes = {
  id: string
}
