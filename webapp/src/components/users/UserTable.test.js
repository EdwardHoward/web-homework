import React from 'react'
import { render, screen } from '../../test-utils'
import { users } from '../../../mocks/users-data'
import { UserTable } from './UserTable'
import '@testing-library/jest-dom'

describe('User Table', () => {
  it('renders table', () => {
    render(<UserTable data={users} />)

    expect(screen.getByTestId('user-table')).toBeInTheDocument()
  })

  it('should show user "employee 4"', () => {
    render(<UserTable data={users} />)

    expect(screen.getByText('4')).toBeInTheDocument()
  })
})
