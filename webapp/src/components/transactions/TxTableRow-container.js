import React from 'react'
import { useMutation } from '@apollo/client'
import UpdateTransaction from '../../gql/mutations/updateTransaction.gql'
import DeleteTransaction from '../../gql/mutations/deleteTransaction.gql'
import GetTransaction from '../../gql/transactions.gql'
import { TxTableRow } from './TxTableRow'
import { bool, number, shape, string } from 'prop-types'

export function TxTableRowContainer ({ data }) {
  const [updateTransaction] = useMutation(UpdateTransaction)
  const [deleteTransaction] = useMutation(DeleteTransaction, {
    variables: {
      id: data.id
    },
    refetchQueries: [{
      query: GetTransaction
    }]
  })

  function handleDeleteClick () {
    deleteTransaction()
  }

  function handleUpdateClick (transaction) {
    updateTransaction({
      variables: transaction
    })
  }

  return <TxTableRow data={data} onDelete={handleDeleteClick} onUpdate={handleUpdateClick} />
}

TxTableRowContainer.propTypes = {
  data: shape({
    id: string,
    user: shape({
      firstName: string,
      lastName: string
    }),
    description: string,
    merchant: shape({
      name: string
    }),
    debit: bool,
    credit: bool,
    amount: number
  })
}
