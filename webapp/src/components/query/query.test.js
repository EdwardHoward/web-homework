import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import { Query } from '.';

describe('Transactions Table', () => {
  it('renders children', () => {
    const testValue = 'test'

    render(<Query>{testValue}</Query>)

    expect(screen.findByText(testValue)).toBeInTheDocument()
  })

  it('displays loading message', () => {
    render(<Query loading={true} />)

    expect(screen.findByText('Loading...')).toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<Query error={true} />)

    expect(screen.findByText('¯\_(ツ)_/¯')).toBeInTheDocument()
  })
})
