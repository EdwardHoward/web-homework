import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Query } from './Query'

describe('Transactions Table', () => {
  it('renders children', () => {
    const testValue = 'test'

    render(<Query><p>{testValue}</p></Query>)

    expect(screen.getByText(testValue)).toBeInTheDocument()
  })

  it('displays loading message', () => {
    render(<Query loading />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<Query error />)

    expect(screen.getByText('Error loading data')).toBeInTheDocument()
  })
})
