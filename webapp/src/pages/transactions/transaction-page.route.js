import React from 'react'
import { useParams } from 'react-router-dom'
import { Transaction } from '.'

export function TransactionRoute () {
  const { id } = useParams()

  return (
    <Transaction id={id} />
  )
}
