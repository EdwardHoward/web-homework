import React from 'react'
import { render, screen, act, waitFor } from '../../test-utils'
import '@testing-library/jest-dom'
import { MerchantDropdown } from './MerchantDropdown'

describe('Merchant Dropdown', () => {
  it('should render dropdown', () => {
    render(<MerchantDropdown value='0' />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should show merchant dropdown', async () => {
    await act(async () => {
      render(<MerchantDropdown value='0' />)

      await waitFor(() => expect(screen.getByTestId('merchant-select')).toBeInTheDocument())
    })
  })
})
