import React from 'react'
import { render, screen } from '../../test-utils'
import { transactions } from '../../../mocks/transactions-data'
import { TxTable } from './TxTable'
import '@testing-library/jest-dom'
// import { waitFor } from '@testing-library/dom'

describe('Transactions Table', () => {
  it('renders table', async () => {
    render(
      <TxTable data={transactions} />
    )

    expect(screen.getByTestId('transaction-table')).toBeInTheDocument()
  })

  it('should show user "employee 4"', () => {
    render(
      <TxTable data={transactions} />
    )

    expect(screen.getByText('employee 4')).toBeInTheDocument()
  })
})
