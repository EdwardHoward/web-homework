import React from 'react'
import { render, screen, act, waitFor } from '../../test-utils'
import { Transaction } from './transaction-page'
import '@testing-library/jest-dom'

describe('Transaction Page', () => {
  it('renders loading', () => {
    render(<Transaction id='5d5c1f747e01cd704f18f863' />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders table', async () => {
    await act(async () => {
      render(<Transaction id='5d5c1f747e01cd704f18f863' />)

      await waitFor(() => expect(screen.getByTestId('transaction-table')).toBeInTheDocument())
    })
  })
})
