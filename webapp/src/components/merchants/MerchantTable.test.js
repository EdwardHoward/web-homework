import React from 'react'
import { render, screen } from '../../test-utils'
import { merchants } from '../../../mocks/merchants-data'
import { MerchantTable } from './MerchantTable'
import '@testing-library/jest-dom'

describe('Merchants Table', () => {
  it('renders table', () => {
    render(<MerchantTable data={merchants} />)

    expect(screen.getByTestId('merchants-table')).toBeInTheDocument()
  })

  it('should show merchant "walmart"', () => {
    render(<MerchantTable data={merchants} />)

    expect(screen.getByText('walmart')).toBeInTheDocument()
  })
})
