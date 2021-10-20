import React from 'react'
import { render, screen, fireEvent } from '../../test-utils'
import { transactions } from '../../../mocks/transactions-data'
import { TxTableRow } from './TxTableRow'
import '@testing-library/jest-dom'

describe('TxTableRow', () => {
  it('should render', () => {
    render(<TxTableRow data={transactions[0]} />)

    expect(screen.getByTestId('tx-table-row')).toBeInTheDocument()
  })

  it('should render transaction', () => {
    render(<TxTableRow data={transactions[0]} />)

    expect(screen.getByDisplayValue('cleaningsupplies')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    render(<TxTableRow data={transactions[0]} />)

    expect(screen.getByLabelText('Edit')).toBeInTheDocument()
    expect(screen.getByLabelText('Delete')).toBeInTheDocument()
  })

  it('should toggle editable', () => {
    render(<TxTableRow data={transactions[0]} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    expect(screen.getByLabelText('Cancel')).toBeInTheDocument()
    expect(screen.getByLabelText('Save')).toBeInTheDocument()
  })

  it('should turn off editable when cancel button is clicked', () => {
    render(<TxTableRow data={transactions[0]} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    fireEvent.click(screen.getByLabelText('Cancel'))

    expect(screen.getByLabelText('Edit')).toBeInTheDocument()
  })

  it('should call onDelete', () => {
    const handleDeleteMock = jest.fn()
    render(<TxTableRow data={transactions[0]} onDelete={handleDeleteMock} />)

    fireEvent.click(screen.getByLabelText('Delete'))

    expect(handleDeleteMock).toHaveBeenCalled()
  })

  it('should call onUpdate', () => {
    const handleUpdateMock = jest.fn()
    render(<TxTableRow data={transactions[0]} onUpdate={handleUpdateMock} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    fireEvent.click(screen.getByLabelText('Save'))

    expect(handleUpdateMock).toHaveBeenCalled()
  })

  it('should format currency', () => {
    render(<TxTableRow data={transactions[0]} />)

    expect(screen.getByDisplayValue('$150.00')).toBeInTheDocument()
  })

  it('should not format currency in edit mode', () => {
    render(<TxTableRow data={transactions[0]} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    expect(screen.getByDisplayValue('150')).toBeInTheDocument()
  })

  it('should format roman numerals', () => {
    render(<TxTableRow data={transactions[0]} />)

    fireEvent.doubleClick(screen.getByDisplayValue('$150.00'))

    expect(screen.getByDisplayValue('CL')).toBeInTheDocument()
  })

  it('should allow editing when in editing mode', () => {
    render(<TxTableRow data={transactions[0]} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    fireEvent.change(screen.getByDisplayValue('150'), { target: { value: '300' } })

    expect(screen.getByDisplayValue('300')).toBeInTheDocument()
  })

  it('should save values when in editing mode', () => {
    render(<TxTableRow data={transactions[0]} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    fireEvent.change(screen.getByDisplayValue('150'), { target: { value: '300' } })

    fireEvent.click(screen.getByLabelText('Save'))

    expect(screen.getByDisplayValue('$300.00')).toBeInTheDocument()
  })
})
