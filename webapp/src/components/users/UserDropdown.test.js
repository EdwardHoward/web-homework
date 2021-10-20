import React from 'react'
import { render, screen, act, waitFor } from '../../test-utils'
import '@testing-library/jest-dom'
import { UserDropdown } from './UserDropdown'

describe('User Dropdown', () => {
  it('renders dropdown', () => {
    render(<UserDropdown value='0' />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should show user dropdown', async () => {
    await act(async () => {
      render(<UserDropdown value='0' />)

      await waitFor(() => expect(screen.getByTestId('user-select')).toBeInTheDocument())
    })
  })
})
