import React from 'react'
import { render, screen } from '@testing-library/react'
import { merchants } from '../../../mocks/merchants-data'
import { MerchantTableRow } from './MerchantTableRow'

describe('MerchantTableRow', () => {
  it('should render', () => {
    render(<MerchantTableRow data={merchants[0]} />)

    expect(screen.getByTestId('merchant-table-row')).toBeInTheDocument()
  })
})
