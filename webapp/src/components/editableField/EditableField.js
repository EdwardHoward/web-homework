import React from 'react'
import { bool, string, func, oneOfType, number } from 'prop-types'
import { TextField } from '@mui/material'

export function EditableField ({ value, editing, onChange }) {
  if (editing) {
    return (
      <TextField data-testid='editable-field-editing' onChange={onChange} value={value} variant='standard' />
    )
  }

  return <TextField data-testid="editable-field-static" InputProps={{ disableUnderline: true, readOnly: true }} onChange={onChange} value={value} variant='standard' />
}

EditableField.propTypes = {
  value: oneOfType([string, bool, number]),
  editing: bool,
  onChange: func
}
