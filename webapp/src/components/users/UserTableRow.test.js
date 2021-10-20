import React from 'react'
import { render, screen } from '../../test-utils'
import { users } from '../../../mocks/users-data'
import { UserTableRow } from './UserTableRow'

describe('UserTableRow', () => {
  it('should render', () => {
    render(<UserTableRow data={users[0]} />)

    expect(screen.getByTestId('user-table-row')).toBeInTheDocument()
  })
})
