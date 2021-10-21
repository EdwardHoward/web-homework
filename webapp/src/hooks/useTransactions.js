import { useMutation } from '@apollo/client'
import CreateTransaction from '../gql/mutations/createTransaction.gql'
import UpdateTransaction from '../gql/mutations/updateTransaction.gql'
import DeleteTransaction from '../gql/mutations/deleteTransaction.gql'
import GetTransaction from '../gql/transactions.gql'

export function useTransactionActions () {
  const [updateTransaction] = useMutation(UpdateTransaction)
  const [createTransaction] = useMutation(CreateTransaction, {
    refetchQueries: [{
      query: GetTransaction
    }]
  })
  const [deleteTransaction] = useMutation(DeleteTransaction, {
    refetchQueries: [{
      query: GetTransaction
    }]
  })

  function create (options) {
    createTransaction(options)
  }

  function update (options) {
    updateTransaction(options)
  }

  function remove (options) {
    deleteTransaction(options)
  }

  return { create, update, remove }
}
