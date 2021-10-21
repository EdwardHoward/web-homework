import React from 'react'
import { render, screen, fireEvent } from '../../test-utils'
import { RowActions } from './RowActions'
import '@testing-library/jest-dom'

describe('Row Actions', () => {
  it('should render', () => {
    render(<RowActions />)

    expect(screen.getByLabelText('Edit')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    render(<RowActions />)

    expect(screen.getByLabelText('Edit')).toBeInTheDocument()
    expect(screen.getByLabelText('Delete')).toBeInTheDocument()
  })

  it('should Cancel and Save buttons when editing', () => {
    render(<RowActions isEditing />)

    expect(screen.getByLabelText('Cancel')).toBeInTheDocument()
    expect(screen.getByLabelText('Save')).toBeInTheDocument()
  })

  it('should call onEditClick when edit button is clicked', () => {
    const onEditClickMock = jest.fn()

    render(<RowActions onEditClick={onEditClickMock} />)

    fireEvent.click(screen.getByLabelText('Edit'))

    expect(onEditClickMock).toHaveBeenCalled()
  })

  it('should call onDeleteClick when delete button is clicked', () => {
    const onDeleteClickMock = jest.fn()

    render(<RowActions onDeleteClick={onDeleteClickMock} />)

    fireEvent.click(screen.getByLabelText('Delete'))

    expect(onDeleteClickMock).toHaveBeenCalled()
  })

  it('should call onCancelClick when cancel button is clicked', () => {
    const onCancelClickMock = jest.fn()

    render(<RowActions isEditing onCancelClick={onCancelClickMock} />)

    fireEvent.click(screen.getByLabelText('Cancel'))

    expect(onCancelClickMock).toHaveBeenCalled()
  })

  it('should call onSaveClick when save button is clicked', () => {
    const onSaveClickMock = jest.fn()

    render(<RowActions isEditing onSaveClick={onSaveClickMock} />)

    fireEvent.click(screen.getByLabelText('Save'))

    expect(onSaveClickMock).toHaveBeenCalled()
  })
})
