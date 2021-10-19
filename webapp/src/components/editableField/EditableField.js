import React from 'react'
import { bool, string, func, oneOfType, number } from 'prop-types'
import { TextField } from '@mui/material'

export function EditableField ({ value, editing, onChange }) {
  if (editing) {
    return (
      <TextField data-testid='editable-field-editing' onChange={onChange} value={value} variant='standard' />
    )
  }

  return <TextField InputProps={{ disableUnderline: true, readOnly: true }} data-testid='editable-field-static' onChange={onChange} value={value} variant='standard' />
}

EditableField.propTypes = {
  editing: bool,
  onChange: func,
  value: oneOfType([string, bool, number])
}
