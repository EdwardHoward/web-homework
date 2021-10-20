import React from 'react'
import { render, screen, act, waitFor } from '../../test-utils'
import { Transactions } from './transactions-page'
import '@testing-library/jest-dom'

describe('Transactions Page', () => {
  it('renders loading', () => {
    render(<Transactions />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders table', async () => {
    await act(async () => {
      render(<Transactions />)

      await waitFor(() => expect(screen.getByText('employee 4')).toBeInTheDocument())
    })
  })
})
