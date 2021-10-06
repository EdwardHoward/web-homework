import React, { Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import GetTransaction from '../../gql/getTransaction.gql'
import { TxTable } from '../../components/transactions/TxTable'
import { useParams } from 'react-router-dom'

export function Transaction () {
  const { id } = useParams()
  const { loading, error, data = {} } = useQuery(GetTransaction, {
    variables: {
      id
    }
  })

  useEffect(() => {
    console.log(id);
  }, [id]);

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
      Transaction {id}
      <TxTable data={[data.transaction]} />
    </Fragment>
  )
}
