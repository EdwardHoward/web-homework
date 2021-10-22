import React from 'react'
import { bool, string, func, oneOfType, number } from 'prop-types'
import { Checkbox } from '@mui/material'

export function EditableCheckbox ({ value, editing, onChange }) {
  if (editing) {
    return (
      <Checkbox checked={value} inputProps={{ 'data-testid': 'editable-checkbox' }} onChange={onChange} variant='standard' />
    )
  }

  return <Checkbox checked={value} inputProps={{ disabled: true, 'data-testid': 'editable-checkbox' }} onChange={onChange} variant='standard' />
}

EditableCheckbox.propTypes = {
  value: oneOfType([string, bool, number]),
  editing: bool,
  onChange: func
}
