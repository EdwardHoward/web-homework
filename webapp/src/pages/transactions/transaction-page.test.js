import React from 'react'
import { render, screen, act, waitFor } from '../../test-utils'
import { Transaction } from './transaction-page'
import '@testing-library/jest-dom'

describe('Transaction Page', () => {
    it('renders table', async () => {
        await act(async () => {
            render(<Transaction />)

            await waitFor(() => expect(screen.findByTestId('transaction-table')).toBeInTheDocument());
        })
    })
})
