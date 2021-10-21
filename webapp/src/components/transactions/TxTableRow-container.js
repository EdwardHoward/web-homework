import React from 'react'
import { TxTableRow } from './TxTableRow'
import { bool, number, shape, string } from 'prop-types'
import { useTransactionActions } from '../../hooks/useTransactions'

export function TxTableRowContainer ({ data }) {
  const { update: updateTransaction, remove: deleteTransaction } = useTransactionActions()

  function handleDeleteClick () {
    deleteTransaction({
      variables: {
        id: data.id
      }
    })
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
