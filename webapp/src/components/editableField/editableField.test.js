import React from 'react'
import { render, screen } from '@testing-library/react'
import { EditableField } from '.'
import '@testing-library/jest-dom'

describe('Editable Field', () => {
  it('renders field', () => {
    render(<EditableField />)

    expect(screen.getByTestId('editable-field-static')).toBeInTheDocument()
  })

  it('should render editing field', () => {
    render(<EditableField editing />)

    expect(screen.getByTestId('editable-field-editing')).toBeInTheDocument()
  })

  it('should render value', () => {
    render(<EditableField value='test' />)

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })
})
